import React from "react";
import { View, StyleSheet } from "react-native";
import SectionHeader from "@/components/logs/SectionHeader";
import CameraFrame from "@/components/logs/CameraFrame";
import UploadButton from "@/components/logs/UploadButton";
import IconButton from "@/components/logs/IconButton";
// import BottomNavBar from "@/components/logs/BottomNavBar";

const MealLoggingScreen = () => {
  return (
    <View style={styles.container}>
      <SectionHeader
        subtitle="LOG YOUR MEAL"
        title="Meal Logging"
        description="Take photo of meal you want logged"
      />

      <View style={styles.cameraSection}>
        <CameraFrame />
      </View>

      <View style={styles.actions}>
        <UploadButton title="Upload from Gallery" />
        <IconButton icon="📷" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 40,
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  cameraSection: {
    alignItems: "center",
    marginVertical: 20,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default MealLoggingScreen;
