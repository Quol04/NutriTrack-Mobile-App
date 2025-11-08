import SectionHeader from "@/components/common/SectionHeader";
import CommunityCard from "@/components/home/CommunityCard";
import DailyCheckIn from "@/components/home/DailyCheckIn";
import Header from "@/components/home/Header";
import SmartSuggestionCard from "@/components/home/SmartSuggestionCard";
import colors from "@/styles/colors";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { meals } from "@/constants/mealsTimetable";
import { router } from "expo-router";
import MealTimelineCard from "@/components/home/MealTimelineCard";



const NutriTrackHome = () => (
  <SafeAreaView style={{ flex: 1 }}>
  <View style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header name="Samuel" date="27th June 2025" />
      <SectionHeader  subtitle="DIETARY ASSISTANT" title={"Smart\nSuggestions"} />
      <DailyCheckIn />
      <View style={{ padding: 16 }}>
        <MealTimelineCard
          meals={meals}
          onLogMeal={() => console.log("Log meal pressed")}
        />
    </View>
      <SmartSuggestionCard onPress={() => router.push("/(home)/smart")} />
      <CommunityCard onPress={() => router.push("/(home)/community")} />
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

