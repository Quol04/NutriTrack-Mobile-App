import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function MealTimelineCard({ meals, onLogMeal }) {

  return (
    <View style={styles.card}>
      <View style={styles.timelineContainer}>
        {/* Labels */}
        <View style={styles.labelsRow}>
          {meals.map((meal, index) => (
            <Text key={index} style={styles.labelText}>
              {meal.name}
            </Text>
          ))}
        </View>

        {/* Timeline Bar */}
        <View style={styles.timelineRow}>
          {meals.map((meal, index) => (
            <View key={index} style={styles.timelineStep}>
              <View
                style={[
                  styles.line,
                  index < meals.length - 1 && {
                    backgroundColor: meal.completed ? "#000" : "#ddd",
                  },
                ]}
              />
              <Ionicons
                name="ellipse"
                size={14}
                color={meal.completed ? "#45C75A" : "#ccc"}
                style={styles.dot}
              />
            </View>
          ))}
        </View>

        {/* Times */}
        <View style={styles.timesRow}>
          {meals.map((meal, index) => (
            <Text key={index} style={styles.timeText}>
              {meal.time}
            </Text>
          ))}
        </View>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.logButton} onPress={onLogMeal}>
        <Text style={styles.logButtonText}>Log Meal</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    marginVertical: 8,
  },
  timelineContainer: {
    marginBottom: 10,
  },
  labelsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  labelText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#333",
  },
  timelineRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 4,
    marginBottom: 4,
  },
  timelineStep: {
    flex: 1,
    alignItems: "center",
    position: "relative",
    // backgroundColor: "#000",
  },
  line: {
    position: "absolute",
    top: 6,
    left: 0,
    right: 0,
    height: 2,
    zIndex: 0,
    backgroundColor: "#cec9c9ff",
  },
  dot: {
    zIndex: 1,
    // backgroundColor: "#68eb79ff",
    // borderWidth: 2,
    // borderColor: "#393030ff",
  },
  timesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginTop: 4,
  },
  timeText: {
    fontSize: 12,
    color: "#666",
  },
  logButton: {
    alignSelf: "flex-end",
    backgroundColor: "#FF3B30",
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  logButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
});
