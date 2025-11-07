import SectionHeader from "@/components/common/SectionHeader";
import CommunityCard from "@/components/home/CommunityCard";
import DailyCheckIn from "@/components/home/DailyCheckIn";
import Header from "@/components/home/Header";
import LogMealButton from "@/components/home/LogMealButton";
import MealTimeline from "@/components/home/MealTimeline";
import SmartSuggestionCard from "@/components/home/SmartSuggestionCard";
import colors from "@/styles/colors";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { meals } from "@/constants/mealsTimetable";


const NutriTrackHome = () => (
  <SafeAreaView style={{ flex: 1 }}>
  <View style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header name="Samuel" date="27th June 2025" />
      <SectionHeader  subtitle="DIETARY ASSISTANT" title={"Smart\nSuggestions"} />
      <DailyCheckIn />
      <MealTimeline meals={meals} />
      <LogMealButton />
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


// =======================
// import React from "react";
// import { ScrollView, View, StyleSheet, useColorScheme } from "react-native";
// import DailyCheckIn from "@/components/home/DailyCheckIn";
// import MealTimeline from "@/components/home/MealTimeline";
// import LogMealButton from "@/components/home/LogMealButton";

// export default function HomeScreen() {
//   const colorScheme = useColorScheme();

//   const themes = {
//     light: {
//       background: "#F5F5F5",
//       text: "#000",
//       textDim: "#888",
//       cardBg: "#fff",
//       cardDark: "#1E1E1E",
//       accent: "#7FFF00",
//       danger: "#FF0000",
//     },
//     dark: {
//       background: "#121212",
//       text: "#fff",
//       textDim: "#888",
//       cardBg: "#1E1E1E",
//       cardDark: "#333",
//       accent: "#7FFF00",
//       danger: "#FF0000",
//     },
//   };

//   const theme = colorScheme === "dark" ? themes.dark : themes.light;



//   return (
//     <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
//       <View style={styles.content}>
//         <DailyCheckIn theme={theme} />
//         <MealTimeline theme={theme} meals={meals} />
//         <LogMealButton theme={theme} onPress={() => console.log("Log meal")} />
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   content: {
//     padding: 16,
//   },
// });
