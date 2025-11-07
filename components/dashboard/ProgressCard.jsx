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
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <View>
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
        <View>
          <Text style={styles.progressText}>{Math.round(progress * 100)}%</Text>
          {daysLeft && <Text style={styles.daysLeft}>{daysLeft} days left</Text>}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    marginVertical: 15,
    gap: 20,
  },
  title: {
    fontSize: 14,
    color: "#666",
     marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#333",
    fontWeight: "700",
   
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
    // position: "absolute",
    // bottom: 20,
    // alignSelf: "center",
    fontSize: 12,
    color: "#999",
    marginTop: 4,
  },
});

export default ProgressCard;
