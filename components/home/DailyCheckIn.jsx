import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "@/styles/colors";

const DailyCheckIn = () => {
  const days = ["24 Mon", "25 Tue", "26 Wed", "27 Thu", "28 Fri", "29 Sat", "30 Sun"];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Check-In</Text>

      <View style={styles.dayList}>
        {days.map((day, index) => (
          <View
            key={index}
            style={[styles.dayBox, index === 3 && styles.activeDayBox]}
          >
            <Text
              style={[styles.dayText, index === 3 && styles.activeDayText]}
            >
              {day}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.mealProgress}>
        <View style={styles.progressRow}>
          <Text>Breakfast</Text>
          <Text>Lunch</Text>
          <Text>Dinner</Text>
        </View>
        <View style={styles.progressBar}>
          <View style={[styles.dot, { left: "10%" }]} />
          <View style={[styles.dot, { left: "50%" }]} />
        </View>
        <View style={styles.progressRow}>
          <Text>10:03am</Text>
          <Text>2:24pm</Text>
          <Text>--:--</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.logMealButton}>
        <Text style={styles.logMealText}>Log Meal</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DailyCheckIn;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: "#000",
    borderRadius: 16,
    padding: 16,
  },
  title: { 
    color: "white", 
    fontSize: 16, 
    marginBottom: 10 
  },
  dayList: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  dayBox: {
    backgroundColor: "#1C1C1C",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  activeDayBox: { 
    backgroundColor: "#6DF57D" 
  },
  dayText: { 
    color: "#ccc", 
    fontSize: 12 },
  activeDayText: {
     color: "#000", 
     fontWeight: "600" 
    },
  mealProgress: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 14,
  },
  progressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  progressBar: {
    height: 4,
    backgroundColor: "#ddd",
    borderRadius: 10,
    marginBottom: 8,
    position: "relative",
  },
  dot: {
    position: "absolute",
    top: -4,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#63D471",
  },
  logMealButton: {
    marginTop: 16,
    backgroundColor: colors.accentRed,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
  },
  logMealText: { 
    color: "#fff", 
    fontWeight: "600", 
    fontSize: 15 },
});
