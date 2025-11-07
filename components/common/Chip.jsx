import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Chip({ label, active, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.chip, active && styles.active]}
      activeOpacity={0.85}
    >
      <Text style={[styles.text, active && styles.textActive]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chip: {
    backgroundColor: "#FFF",
    borderRadius: 22,
    paddingHorizontal: 18,
    paddingVertical: 10,
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#E6E6E6",
  },
  active: {
    backgroundColor: "#000",
    borderColor: "#000",
  },
  text: {
    fontSize: 14,
    color: "#333",
    fontWeight: "600",
  },
  textActive: {
    color: "#fff",
  },
});
