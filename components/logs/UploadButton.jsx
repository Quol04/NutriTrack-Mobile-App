import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const UploadButton = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#EAEAEA",
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 14,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
  },
  text: {
    fontWeight: "600",
    fontSize: 14,
    color: "#111",
  },
});

export default UploadButton;
