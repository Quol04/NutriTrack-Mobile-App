import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function BlogCard({ item }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        <View style={styles.meta}>
          <Text style={styles.metaText}>{item.date}</Text>
          <View style={styles.dot} />
          <Text style={styles.metaText}>{item.time}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.bookmarkBtn}>
        <Feather name="bookmark" size={18} color="#111" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
    padding: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  image: { 
    width: 80, 
    height: 80, 
    borderRadius: 10, 
    marginRight: 10 },
  content: { 
    flex: 1 },
  category: { 
    fontSize: 12, 
    fontWeight: "700", 
    color: "#00B060",
     marginBottom: 4 },
  title: { 
    fontSize: 14, 
    fontWeight: "600", 
    color: "#111" },
  meta: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginTop: 6 },
  metaText: { 
    fontSize: 12, 
    color: "#888" },
  dot: { 
    width: 4,
    height: 4, 
    borderRadius: 2, 
    backgroundColor: "#ccc", 
    marginHorizontal: 6 },
  bookmarkBtn: { 
    padding: 4, 
    marginLeft: 4 },
});
