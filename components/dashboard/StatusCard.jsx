import React from "react";
import { View, Text, StyleSheet,Image } from "react-native";

const StatusCard = ({ label, value, icon, type, message, subtitle }) => {
  if (type === "highlight") {
    return (
      <View style={[styles.card, styles.highlight]}>
        <View>
          <Text style={styles.message}>{message}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <Image 
          source={require('@/assets/images/vector.png')}
          style={styles.image}
        />
        <Text style={styles.icon}>{icon}</Text>
      </View>
    );
  }

  return (
    <View style={styles.card}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.row}>
        <Text style={styles.value}>{value}</Text>
        <Text style={styles.icon}>{icon}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 16,
    width: "48%",
    marginBottom: 12,
    // flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "center",
  },
  label: {
    fontSize: 12,
    color: "#666",
    marginBottom: 8,
  },
  image: {
    width: 34,
    height: 44,
  },
  value: {
    fontSize: 18,
    fontWeight: "700",
  },
  icon: {
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  highlight: {
    backgroundColor: "#C7F9CC",
    width: "100%",
  },
  message: {
    fontSize: 14,
    fontWeight: "600",
  },
  subtitle: {
    color: "#333",
    fontSize: 12,
  },
});

export default StatusCard;
