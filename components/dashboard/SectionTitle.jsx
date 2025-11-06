import React from "react";
import { Text, StyleSheet } from "react-native";

const SectionTitle = ({ title }) => (
  <Text style={styles.title}>{title}</Text>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
    marginBottom: 20,
  },
});

export default SectionTitle;
