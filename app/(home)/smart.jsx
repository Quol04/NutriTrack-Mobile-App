// MealsScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { styles } from "@/styles/_smartStyles";
import { FILTERS, SAMPLE_FOODS } from "@/constants/smartData";
import { SafeAreaView } from "react-native-safe-area-context";


export default function MealsScreen() {
  const [activeFilter, setActiveFilter] = useState(FILTERS[0]);
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderChip = (filter) => {
    const active = filter === activeFilter;
    return (
      <TouchableOpacity
        key={filter}
        onPress={() => setActiveFilter(filter)}
        style={[styles.chip, active && styles.chipActive]}
        activeOpacity={0.85}
      >
        <Text style={[styles.chipText, active && styles.chipTextActive]}>
          {filter}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderCard = ({ item }) => {
    const fav = !!favorites[item.id];
    return (
      <View style={styles.cardWrapper}>
        <View style={styles.card}>
          <Image
            source={{ uri: item.image }}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <TouchableOpacity
            style={styles.heartBtn}
            onPress={() => toggleFavorite(item.id)}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <Feather
              name={fav ? "heart" : "heart"}
              size={18}
              color={fav ? "#FF3B30" : "#444"}
              style={fav ? styles.heartFilled : undefined}
            />
          </TouchableOpacity>

          <View style={styles.cardMeta}>
            <Text style={styles.cardTitle} numberOfLines={1}>
              {item.name}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.subHeading}>DIETARY ASSISTANT</Text>
          <Text style={styles.title}>Smart{"\n"}Suggestions</Text>
        </View>

        <View style={styles.chipsRow}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 12 }}
          >
            {FILTERS.map(renderChip)}
          </ScrollView>
        </View>

        <View style={styles.gridWrap}>
          <FlatList
            data={SAMPLE_FOODS}
            keyExtractor={(i) => i.id}
            numColumns={2}
            renderItem={renderCard}
            scrollEnabled={false} // let outer ScrollView handle scrolling
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={{ justifyContent: "space-between" }}
          />
        </View>
      </ScrollView>

     
    </SafeAreaView>
  );
}

