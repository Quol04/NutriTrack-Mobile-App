import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CalendarCard = ({ month, loggedDays, missedDays }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{month}</Text>
      <View style={styles.legend}>
        <View style={styles.legendItem}>
          <View style={[styles.dot, { backgroundColor: "#4CD964" }]} />
          <Text style={styles.legendText}>Logged Meals</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.dot, { backgroundColor: "#FF4C4C" }]} />
          <Text style={styles.legendText}>Missed days</Text>
        </View>
      </View>

      <View style={styles.grid}>
        {[...Array(28)].map((_, i) => {
          const day = i + 1;
          const isLogged = loggedDays.includes(day);
          const isMissed = missedDays.includes(day);
          return (
            <View
              key={day}
              style={[
                styles.day,
                isLogged && styles.logged,
                isMissed && styles.missed,
              ]}
            >
              <Text style={styles.dayText}>{day}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 16,
    marginTop: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 8,
  },
  legend: {
    flexDirection: "row",
    marginBottom: 12,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 4,
  },
  legendText: {
    fontSize: 12,
    color: "#666",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  day: {
    width: "12%",
    margin: 4,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EEE",
  },
  logged: {
    backgroundColor: "#4CD964",
  },
  missed: {
    backgroundColor: "#FF4C4C",
  },
  dayText: {
    color: "#FFF",
    fontWeight: "600",
  },
});

export default CalendarCard;
