import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SectionHeader = ({ subtitle, title, description }) => (
  <View style={styles.container}>
    <Text style={styles.subtitle}>{subtitle}</Text>
    <Text style={styles.title}>{title}</Text>
    {description && <Text style={styles.description}>{description}</Text>}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  subtitle: {
    color: "#999",
    fontSize: 10,
    textTransform: "uppercase",
    marginBottom: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
  },
  description: {
    fontSize: 13,
    color: "#666",
    marginTop: 4,
  },
});

export default SectionHeader;
