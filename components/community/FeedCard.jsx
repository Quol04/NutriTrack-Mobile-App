import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
// import { VideoCard } from "./VideoCard";
// import { videos } from "@/constants/VideoData";

export default function FeedCard({ item }) {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      {item.video && (
        // <VideoCard item={item} />
        <View style={styles.playOverlay}>
          <Ionicons name="play-circle" size={36} color="#fff" />
        </View>
      )}
     
      <View style={styles.overlay}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 180,
    height: 120,
    borderRadius: 14,
    marginRight: 14,
    overflow: "hidden",
    backgroundColor: "#ddd",
  },
  image: { 
    width: "100%",
    height: "100%" 
    },
  playOverlay: {
     position: "absolute", 
     top: "38%", 
     left: "38%" ,
    //  backgroundColor: "rgba(0,0,0,0.3)",
    },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 8,
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  title: { 
    color: "#fff", 
    fontSize: 12, 
    fontWeight: "600",
  },
});
