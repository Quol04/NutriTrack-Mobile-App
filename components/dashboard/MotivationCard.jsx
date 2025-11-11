import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function MotivationCard({ name = "Samuel" }) {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.textMain}>You’re almost</Text>
        <Text style={styles.textMain}>at your target</Text>
        <Text style={styles.textSub}>Finish Strong, <Text style={styles.name}>{name}</Text></Text>
      </View>
      <Feather name="flag" size={40} color="#00b300" />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#b6ffb3",
    borderRadius: 20,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textMain: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  textSub: {
    fontSize: 14,
    color: "#333",
    marginTop: 8,
  },
  name: {
    fontWeight: "700",
  },
});
