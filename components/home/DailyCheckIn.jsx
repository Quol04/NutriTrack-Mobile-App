
// import { darkTheme } from "@/styles/themes";
// import { useState } from "react";
// import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// const days = [
//   { day: "Mon", date: 24 },
//   { day: "Tue", date: 25 },
//   { day: "Wed", date: 26 },
//   { day: "Thu", date: 27 },
//   { day: "Fri", date: 28 },
//   { day: "Sat", date: 29 },
//   { day: "Sun", date: 30 },
// ];

// export default function DailyCheckIn({ theme }) {
//   const [selected, setSelected] = useState("Thu");
//   const themeToUse = theme ?? darkTheme;

//   return (
//     <View style={[styles.container]}>
//       <Text style={[styles.title]}>Daily Check-In</Text>
//       <FlatList
//         horizontal
//         data={days}
//         contentContainerStyle={styles.daysContainer}
//         renderItem={({ item }) => {
//           const isActive = selected === item.day;
//           return (
//             <TouchableOpacity
//               style={[
//                 styles.dayCard,
//                 {
//                   backgroundColor: isActive ? themeToUse.accent : themeToUse.cardDark,
//                 },
//               ]}
//               onPress={() => setSelected(item.day)}
//             >
//               <Text style={[styles.date, { color: "#fff" }]}>{item.date}</Text>
//               <Text style={[styles.day, { color: "#fff" }]}>{item.day}</Text>
//             </TouchableOpacity>
//           );
//         }}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     borderRadius: 16,
//     padding: 34,
//     marginBottom: 16,
//     marginHorizontal: 16,
//     backgroundColor: "#000",
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "600",
//     marginBottom: 10,
//     color: "#fff",
//   },
//   daysContainer: {
//     justifyContent: "space-between",
//     paddingVertical:16,
//   },
//   dayCard: {
//     width: 60,
//     height: 70,
//     borderRadius: 12,
//     marginRight: 10,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   date: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   day: {
//     fontSize: 14,
//   },
// });

// ============================?

import { darkTheme } from "@/styles/themes";
import { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Helper to get the current week's days (Mon–Sun)
function getCurrentWeekDays() {
  const now = new Date();
  const currentDay = now.getDay(); // Sunday = 0, Monday = 1, ...
  const monday = new Date(now);
  monday.setDate(now.getDate() - ((currentDay + 6) % 7)); // Adjust to Monday

  const days = [];
  const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    days.push({
      day: dayNames[i],
      date: d.getDate(),
      fullDate: d.toDateString(),
    });
  }
  return days;
}

export default function DailyCheckIn({ theme }) {
  const themeToUse = theme ?? darkTheme;
  const [days, setDays] = useState(getCurrentWeekDays());
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const today = new Date();
    const todayName = today.toDateString();
    const todayItem = days.find((d) => d.fullDate === todayName);
    if (todayItem) {
      setSelected(todayItem.day);
    }
  }, [days]);

  return (
    <View style={[styles.container]}>
      <Text style={[styles.title]}>Daily Check-In</Text>
      <FlatList
        horizontal
        data={days}
        keyExtractor={(item) => item.fullDate}
        contentContainerStyle={styles.daysContainer}
        renderItem={({ item }) => {
          const isActive = selected === item.day;
          return (
            <TouchableOpacity
              style={[
                styles.dayCard,
                {
                  backgroundColor: isActive
                    ? themeToUse.accent
                    : themeToUse.cardDark,
                },
              ]}
              onPress={() => setSelected(item.day)}
            >
              <Text style={[styles.date, { color: "#fff" }]}>{item.date}</Text>
              <Text style={[styles.day, { color: "#fff" }]}>{item.day}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    padding: 34,
    marginBottom: 16,
    marginHorizontal: 16,
    backgroundColor: "#000",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
    color: "#fff",
  },
  daysContainer: {
    justifyContent: "space-between",
    paddingVertical: 16,
  },
  dayCard: {
    width: 60,
    height: 70,
    borderRadius: 12,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  date: {
    fontSize: 18,
    fontWeight: "bold",
  },
  day: {
    fontSize: 14,
  },
});
