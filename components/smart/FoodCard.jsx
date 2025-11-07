import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function FoodCard({ item, isFavorite, onToggle }) {
  return (
    <View style={styles.cardWrapper}>
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <TouchableOpacity style={styles.heartBtn} onPress={onToggle}>
          <Feather name="heart" size={18} color={isFavorite ? "#FF3B30" : "#444"} />
        </TouchableOpacity>
        <View style={styles.meta}>
          <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    flex: 1,
    marginBottom: 16,
    marginHorizontal: 6,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 150,
  },
  meta: {
    padding: 12,
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
    color: "#222",
  },
  heartBtn: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(255,255,255,0.92)",
    padding: 6,
    borderRadius: 20,
  },
});
