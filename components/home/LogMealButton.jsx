import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function LogMealButton({ onPress }) {
  return (
    <TouchableOpacity
      style={styles.button }
      onPress={onPress}
    >
      <Text style={styles.text}>Log Meal</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
    marginTop: 15,
    backgroundColor: "#FF0404",
    width: "40%",
    position: "relative",
    left: 220,
    // alignSelf: "center",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
