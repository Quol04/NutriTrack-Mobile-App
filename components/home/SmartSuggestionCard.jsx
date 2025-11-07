import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import colors from "@/styles/colors";

const SmartSuggestionCard = () => (
  <View style={styles.card}>
    <View style={{ flex: 1 }}>
      <Text style={styles.cardTitle}>SMART SUGGESTION</Text>
      <Text style={styles.cardQuestion}>What’re you hungry for today?</Text>
      <TouchableOpacity style={styles.greenButton}>
        <Text style={styles.greenButtonText}>Browse suggestions</Text>
      </TouchableOpacity>
    </View>
    <Image
      source={{ uri: "https://i.ibb.co/1zjxP2k/rice.png" }}
      style={styles.foodImage}
    />
  </View>
);

export default SmartSuggestionCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginHorizontal: 20,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    elevation: 2,
  },
  cardTitle: { fontSize: 12, color: "#777", fontWeight: "500" },
  cardQuestion: { fontSize: 16, fontWeight: "600", color: "#000", marginVertical: 4 },
  greenButton: {
    backgroundColor: colors.accentGreen,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginTop: 8,
  },
  greenButtonText: { fontWeight: "600", color: "#000" },
  foodImage: { width: 80, height: 80, borderRadius: 50, marginLeft: 12 },
});
