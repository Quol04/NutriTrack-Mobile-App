// import React, { useState } from "react";
// import { ScrollView, FlatList, StyleSheet, View } from "react-native";
// import { FILTERS, SAMPLE_FOODS } from "@/constants/mealsData";
// import SectionHeader from "@/components/common/SectionHeader";
// import FilterChipsRow from "@/components/smart/FilterChipRow";
// import FoodCard from "@/components/smart/FoodCard";
// import { SafeAreaView } from "react-native-safe-area-context";


// export default function MealsScreen() {
//   const [activeFilter, setActiveFilter] = useState(FILTERS[0]);
//   const [favorites, setFavorites] = useState({});

//   const toggleFavorite = (id) => {
//     setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
//   };

//   return (
//     <SafeAreaView style={styles.safe}>
//       <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 120 }}>
//         <SectionHeader subtitle="DIETARY ASSISTANT" title={"Smart\nSuggestions"} />
//         <View style={styles.chipsRow}>
//           <FilterChipsRow
//             filters={FILTERS}
//             activeFilter={activeFilter}
//             onSelect={setActiveFilter}
//           />
//         </View>

//         <View style={styles.gridWrap}>
//           <FlatList
//             data={SAMPLE_FOODS}
//             keyExtractor={(i) => i.id}
//             numColumns={2}
//             renderItem={({ item }) => (
//               <FoodCard
//                 item={item}
//                 isFavorite={!!favorites[item.id]}
//                 onToggle={() => toggleFavorite(item.id)}
//               />
//             )}
//             scrollEnabled={false}
//             showsVerticalScrollIndicator={false}
//           />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safe: { 
//     flex: 1, 
//     backgroundColor: "#F7F7F7" ,
//     paddingTop: 20,
//   },
//   container: {
//      flex: 1, 
//      backgroundColor: "#F7F7F7" 
//     },
//   chipsRow: { 
//     marginTop: 8, 
//     paddingVertical: 8 
//   },
//   gridWrap: { 
//     paddingHorizontal: 12, 
//     marginTop: 10 
//   },
// });
// // // Styles can be found in styles/_smartStyles.js

// ---------------------------------------------

import SectionHeader from "@/components/common/SectionHeader";
import FilterChipsRow from "@/components/smart/FilterChipRow";
import FoodCard from "@/components/smart/FoodCard";
import { BASE_URL } from "@/config";
import { FILTERS } from "@/constants/mealsData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useMemo, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MealsScreen() {
  const [activeFilter, setActiveFilter] = useState(FILTERS[0]);
  const [favorites, setFavorites] = useState({});
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // ✅ Fetch food suggestions from backend
  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        setLoading(true);
        setError(null);
        const token = await AsyncStorage.getItem("token"); // Store token after login
        if (!token) {
          setError("User not authenticated");
          setLoading(false);
          return;
        }

        const res = await fetch(`${BASE_URL}/api/suggestions`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          const msg = await res.text();
          throw new Error(msg || "Failed to fetch suggestions");
        }

        const data = await res.json();
        // ensure an array
        setFoods(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err?.message || String(err));
      } finally {
        setLoading(false);
      }
    };

    fetchSuggestions();
  }, []);

  // 🧠 Filter meals dynamically
  const filteredMeals = useMemo(() => {
    if (activeFilter === "All") return foods;
    return foods.filter(
      (meal) =>
        meal.category?.toLowerCase() === activeFilter.toLowerCase() ||
        meal.type?.toLowerCase() === activeFilter.toLowerCase()
    );
  }, [activeFilter, foods]);

  const renderHeader = () => (
    <>
      <SectionHeader subtitle="DIETARY ASSISTANT" title={"Smart\nSuggestions"} />
      <View style={styles.chipsRow}>
        <FilterChipsRow
          filters={FILTERS}
          activeFilter={activeFilter}
          onSelect={setActiveFilter}
        />
      </View>
    </>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <FlatList
        data={filteredMeals}
        keyExtractor={(i, idx) => (i?._id ? String(i._id) : String(idx))}
        numColumns={2}
        renderItem={({ item }) => (
          <FoodCard
            item={item}
            isFavorite={!!favorites[item._id]}
            onToggle={() => toggleFavorite(item._id)}
          />
        )}
        ListHeaderComponent={() => (
          <View style={styles.containerHeader}>
            {renderHeader()}
            {loading ? (
              <ActivityIndicator size="large" color="#4CAF50" />
            ) : error ? (
              <Text style={styles.errorText}>{error}</Text>
            ) : null}
          </View>
        )}
        ListEmptyComponent={() => (
          !loading && !error ? (
            <View style={{ alignItems: "center", padding: 40 }}>
              <Text style={styles.emptyText}>No meals found for this category 🍽️</Text>
            </View>
          ) : null
        )}
        columnWrapperStyle={{ justifyContent: "space-between", paddingHorizontal: 6 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    paddingTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },
  chipsRow: {
    marginTop: 8,
    paddingVertical: 8,
  },
  gridWrap: {
    paddingHorizontal: 12,
    marginTop: 10,
  },
  errorText: {
    textAlign: "center",
    color: "red",
    marginVertical: 20,
  },
  emptyText: {
    fontSize: 16,
    color: "#777",
  },
});
