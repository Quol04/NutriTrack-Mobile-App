// import React from "react";
// import { View, Text, StyleSheet } from "react-native";
// // import { ProgressCircle } from "react-native-svg-charts";

// const ProgressCard = ({ title, subtitle, progress, daysLeft }) => {
//   return (
//     <View style={styles.card}>
//       <Text style={styles.subtitle}>⚡ {subtitle}</Text>
//       <View style={styles.row}>
//         <View>
//           <Text style={styles.title}>{title}</Text>
//         </View>
//         <View style={styles.circleContainer}>
//           <ProgressCircle
//             style={{ height: 60, width: 60 }}
//             progress={progress}
//             progressColor={"#4CD964"}
//             backgroundColor="#EEE"
//           />
//           <View style={styles.overlay}>
//             <Text style={styles.days}>{daysLeft}</Text>
//             <Text style={styles.label}>days</Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: "#FFEFE3",
//     borderRadius: 16,
//     padding: 16,
//     marginBottom: 12,
//   },
//   subtitle: {
//     color: "#666",
//     fontSize: 12,
//     marginBottom: 8,
//   },
//   title: {
//     fontWeight: "600",
//     fontSize: 16,
//     color: "#222",
//   },
//   row: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   circleContainer: {
//     position: "relative",
//   },
//   overlay: {
//     position: "absolute",
//     top: 12,
//     left: 16,
//     alignItems: "center",
//   },
//   days: {
//     fontWeight: "700",
//     fontSize: 16,
//   },
//   label: {
//     fontSize: 10,
//     color: "#666",
//   },
// });

// export default ProgressCard;



// components/dashboard/ProgressCard.jsx
import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { ProgressChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const ProgressCard = ({ title, subtitle, progress, daysLeft }) => {
  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    color: (opacity = 1) => `rgba(76, 175, 80, ${opacity})`,
    strokeWidth: 8,
    useShadowColorFromDataset: false,
  };

  const data = {
    data: [progress], // value between 0–1
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>

      <ProgressChart
        data={data}
        width={screenWidth * 0.35}
        height={screenWidth * 0.35}
        strokeWidth={12}
        radius={40}
        chartConfig={chartConfig}
        hideLegend={true}
        style={styles.chart}
      />

      <Text style={styles.progressText}>{Math.round(progress * 100)}%</Text>
      {daysLeft && <Text style={styles.daysLeft}>{daysLeft} days left</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    margin: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  subtitle: {
    fontSize: 13,
    color: "#666",
    marginBottom: 10,
  },
  chart: {
    marginVertical: 10,
  },
  progressText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#4CAF50",
  },
  daysLeft: {
    fontSize: 12,
    color: "#999",
    marginTop: 4,
  },
});

export default ProgressCard;
