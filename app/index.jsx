import React, { useState } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { images } from "@/constants";
import Carousel from "@/components/onboarding/Carousel";
import DotIndicator from "@/components/onboarding/DotIndicator";
import AuthButtons from "@/components/common/onboardingButton";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { width } = Dimensions.get("window");

  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Image Carousel */}
      <Carousel images={images} onScroll={handleScroll} />

      {/* Dots Indicator */}
      <DotIndicator total={images.length} activeIndex={currentIndex} />

      {/* Text Content */}
      <View style={styles.textContainer}>
        <Text style={styles.subheading}>FOR FITNESS ENTHUSIASTS</Text>
        <Text style={styles.title}>NutriTrack</Text>
        <Text style={styles.subtitle}>
          All-round Nutritional and Wellness Tracker
        </Text>
      </View>

      {/* Action Buttons */}
      <AuthButtons
        onGetStarted={() => router.push("/onboarding")}
        onLogin={() => router.push("/(auth)/login")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0A0A",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 30,
  },
  textContainer: {
    alignItems: "center",
    // marginTop: 2,
  },
  subheading: {
    color: "#888",
    fontSize: 12,
    letterSpacing: 1,
    marginBottom: 8,
    fontWeight: "500",
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#FFF",
    marginBottom: 8,
  },
  subtitle: {
    color: "#ccc",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
    fontWeight: "500",
  },
});
