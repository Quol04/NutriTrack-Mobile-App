import React, { useState } from "react";
import { ScrollView, FlatList, StyleSheet, View } from "react-native";
import { FILTERS, SAMPLE_FOODS } from "@/constants/mealsData";
import SectionHeader from "@/components/common/SectionHeader";
import FilterChipsRow from "@/components/smart/FilterChipRow";
import FoodCard from "@/components/smart/FoodCard";
import { SafeAreaView } from "react-native-safe-area-context";

// import BottomNav from "../components/common/BottomNav";

export default function MealsScreen() {
  const [activeFilter, setActiveFilter] = useState(FILTERS[0]);
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 120 }}>
        <SectionHeader subtitle="DIETARY ASSISTANT" title={"Smart\nSuggestions"} />
        <View style={styles.chipsRow}>
          <FilterChipsRow
            filters={FILTERS}
            activeFilter={activeFilter}
            onSelect={setActiveFilter}
          />
        </View>

        <View style={styles.gridWrap}>
          <FlatList
            data={SAMPLE_FOODS}
            keyExtractor={(i) => i.id}
            numColumns={2}
            renderItem={({ item }) => (
              <FoodCard
                item={item}
                isFavorite={!!favorites[item.id]}
                onToggle={() => toggleFavorite(item.id)}
              />
            )}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { 
    flex: 1, 
    backgroundColor: "#F7F7F7" ,
    paddingTop: 20,
  },
  container: {
     flex: 1, 
     backgroundColor: "#F7F7F7" 
    },
  chipsRow: { 
    marginTop: 8, 
    paddingVertical: 8 
  },
  gridWrap: { 
    paddingHorizontal: 12, 
    marginTop: 10 
  },
});
// // Styles can be found in styles/_smartStyles.js