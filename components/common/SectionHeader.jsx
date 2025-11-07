import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SectionHeader({ subtitle, title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.sub}>{subtitle}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    paddingTop: 28,
    paddingBottom: 8,
  },
  sub: {
    fontSize: 12,
    color: "#9AA0A6",
    letterSpacing: 1,
  },
  title: {
    fontSize: 24,
    lineHeight: 28,
    fontWeight: "800",
    color: "#111",
    marginTop: 6,
  },
});
