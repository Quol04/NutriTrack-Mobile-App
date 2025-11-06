import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import ProgressCard from "@/components/dashboard/ProgressCard";
import StatusCard from "@/components/dashboard/StatusCard";
import CalendarCard from "@/components/dashboard/CalendarCard";
import SummaryCard from "@/components/dashboard/SummaryCard";
import SectionTitle from "@/components/dashboard/SectionTitle";

const DashboardScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <SectionTitle title="Dashboard" />

      <ProgressCard
        title="Your Weekly Progress"
        subtitle="Completion"
        progress={0.6}
        daysLeft={4}
      />

      <View style={styles.highlightContainer}>
        <StatusCard
          type="highlight"
          message="You’re almost at your target"
          subtitle="Finish Strong, Samuel"
        />
      </View>

      <View style={styles.row}>
        <StatusCard label="Meals taken today" value="2/3" icon="🍽️" />
        <StatusCard label="Weekly Task completed" value="3/7" icon="📅" />
      </View>

      <CalendarCard
        month="October"
        loggedDays={[1, 2, 4, 5, 8, 9, 12, 14, 16, 18, 20, 21, 24, 26]}
        missedDays={[3, 6, 7, 10, 13, 15, 17, 19, 22, 23, 25, 27]}
      />

      <SummaryCard title="View Logged Meals" icon="👁️" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  highlightContainer: {
    marginVertical: 12,
  },
});

export default DashboardScreen;
