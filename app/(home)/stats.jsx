import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import ProgressCard from "@/components/dashboard/ProgressCard";
import StatusCard from "@/components/dashboard/StatusCard";
import CalendarCard from "@/components/dashboard/CalendarCard";
import SummaryCard from "@/components/dashboard/SummaryCard";
import { SafeAreaView } from "react-native-safe-area-context";
import SectionHeader from "@/components/common/SectionHeader";
import { Feather } from "@expo/vector-icons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const DashboardScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1,paddingTop: 20 }}>
      <ScrollView style={styles.safe} showsVerticalScrollIndicator={false}>
       <SectionHeader subtitle="YOUR PROGRESS" title="Dashboard" />
       <View style={styles.container}>

      <ProgressCard
        title="Completion"
        subtitle="Your Weekly Progress"
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
        <StatusCard label="Meals taken today" value="2/3" icon={<MaterialIcons name="no-meals" size={22} color="#666" />} />
        <StatusCard label="Weekly Task completed" value="3/7" icon={<Feather name="calendar" size={22} color="#666" />} />
      </View>

      <CalendarCard
        month="October"
        loggedDays={[1, 2, 4, 5, 8, 9, 12, 14, 16, 18, 20, 21, 24, 26]}
        missedDays={[3, 6, 7, 10, 13, 15, 17, 19, 22, 23, 25, 27]}
      />

      <SummaryCard title="View Logged Meals" icon={<Feather name="eye" size={26} color="#666" />} />
      </View>
    </ScrollView>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F5F5F5",
   
  },
  container: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    // paddingVertical: 2,
  },
  highlightContainer: {
    marginVertical: 12,
  },
});

export default DashboardScreen;
