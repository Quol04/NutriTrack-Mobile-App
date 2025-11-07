import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import Header from "@/components/home/Header";
import DailyCheckIn from "@/components/home/DailyCheckIn";
import SmartSuggestionCard from "@/components/home/SmartSuggestionCard";
import CommunityCard from "@/components/home/CommunityCard";
import { SafeAreaView } from "react-native-safe-area-context";
import SectionHeader from "@/components/common/SectionHeader";
import colors from "@/styles/colors";


const NutriTrackHome = () => (
  <SafeAreaView style={{ flex: 1 }}>
  <View style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header name="Samuel" date="27th June 2025" />
      <SectionHeader  subtitle="DIETARY ASSISTANT" title={"Smart\nSuggestions"} />
      <DailyCheckIn />
      <SmartSuggestionCard />
      <CommunityCard />
    </ScrollView>
  </View>
  </SafeAreaView>
);

export default NutriTrackHome;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: colors.secondary
  },
  sectionHeader: { 
    paddingHorizontal: 20, 
    marginTop: 10 
  },
  subHeading: { 
    color: "#A3A3A3", 
    fontSize: 12, 
    letterSpacing: 1 
  },

  title: { 
    fontSize: 26, 
    fontWeight: "800", 
    color: "#000" 
  },
});
