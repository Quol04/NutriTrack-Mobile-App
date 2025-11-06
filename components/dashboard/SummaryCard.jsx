import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SummaryCard = ({ title, icon }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.icon}>{icon}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 16,
    marginVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
  },
  icon: {
    fontSize: 18,
  },
});

export default SummaryCard;
