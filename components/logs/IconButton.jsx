import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const IconButton = ({ icon, onPress }) => (
  <TouchableOpacity style={styles.iconButton} onPress={onPress}>
    <Text style={styles.icon}>{icon}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  iconButton: {
    backgroundColor: "#000",
    borderRadius: 10,
    width: 52,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: "#FFF",
    fontSize: 22,
  },
});

export default IconButton;
