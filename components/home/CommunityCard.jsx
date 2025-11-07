import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "@/styles/colors";

const CommunityCard = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Nutrition on your mind?</Text>
    <Text style={styles.subtitle}>Visit the community</Text>
    <TouchableOpacity style={styles.orangeButton}>
      <Feather name="arrow-up-right" size={18} color="white" />
    </TouchableOpacity>
  </View>
);

export default CommunityCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginHorizontal: 20,
    padding: 16,
    position: "relative",
    shadowColor: "#000",
    shadowOpacity: 0.1,
  },
  title: { 
    fontSize: 18, 
    fontWeight: "700", 
    color: "#000"
   },
  subtitle: { 
    color: "#777", 
    marginTop: 4 
  },
  orangeButton: {
    backgroundColor: colors.accentOrange,
    borderRadius: 8,
    padding: 10,
    position: "absolute",
    right: 16,
    bottom: 16,
  },
});
