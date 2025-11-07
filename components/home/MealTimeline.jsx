import { darkThemeCompat } from "@/styles/themes";
import { StyleSheet, Text, View } from "react-native";

export default function MealTimeline({ theme, meals = [] }) {
  const themeToUse = theme ?? darkThemeCompat;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {meals.map((meal, index) => (
          <View key={index} style={styles.mealItem}>
            <Text style={[styles.mealLabel, { color: themeToUse.text }]}>{meal.name}</Text>
          </View>
        ))}
      </View>

      <View style={styles.timeline}>
        {meals.map((meal, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { backgroundColor: meal.active ? themeToUse.accent : themeToUse.textDim },
            ]}
          />
        ))}
        <View
          style={[
            styles.line,
            { backgroundColor: themeToUse.textDim, position: "absolute" },
          ]}
        />
      </View>

      <View style={styles.row}>
        {meals.map((meal, index) => (
          <Text key={index} style={[styles.time, { color: themeToUse.text }]}>
            {meal.time}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginHorizontal: 16,
    padding: 46,
    // flexDirection: "row",
    // alignItems: "center",
    marginBottom: 20,
    // elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mealItem: {
    flex: 1,
    alignItems: "center",
  },
  mealLabel: {
    fontSize: 14,
    fontWeight: "500",
  },
  timeline: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    marginVertical: 8,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    zIndex: 2,
    position: "absolute",
    top: -4,
    backgroundColor: "#63D471",
  },
  line: {
    height: 4,
    width: "100%",
    top: 4,
    zIndex: 1,
    borderRadius: 2,
  },
  time: {
    fontSize: 12,
    textAlign: "center",
  },
});

// mealProgress: {
//     backgroundColor: "#fff",
//     borderRadius: 16,
//     padding: 14,
//   },
//   progressRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 6,
//   },
//   progressBar: {
//     height: 4,
//     backgroundColor: "#ddd",
//     borderRadius: 10,
//     marginBottom: 8,
//     position: "relative",
//   },
