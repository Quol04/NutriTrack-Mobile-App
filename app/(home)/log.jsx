import React from "react";
import { View, StyleSheet } from "react-native";
import SectionHeader from "@/components/common/SectionHeader";
import CameraFrame from "@/components/logs/CameraFrame";
import UploadButton from "@/components/logs/UploadButton";
import IconButton from "@/components/logs/IconButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import MealLogCamera from "@/components/logs/MealLogCamera";
// import BottomNavBar from "@/components/logs/BottomNavBar";

const LogScreen = () => {
  const router = useRouter();
  const openCamera = () => {
    <MealLogCamera />;
    // Logic to open the camera
    router.push('/MealLogCamera');
    console.log("Camera opened");
  }
  return (
    <SafeAreaView style={{ flex: 1,paddingTop: 20,}}>
      <SectionHeader
        subtitle="LOG YOUR MEAL"
        title="Meal Logging"
      />
    <View style={styles.container}>
      {/* <View><Text>Take photo of meal you want logged</Text></View> */}
      {/* <Text>Take photo of meal you want logged</Text> */}

      <View style={styles.cameraSection}>
        <CameraFrame />
      </View>

      <View style={styles.actions}>
        <UploadButton title="Upload from Gallery" />
        <IconButton icon={<Feather name="camera" size={24} color="#fff" />} onPress={openCamera} />
      </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",

  },
  cameraSection: {
    alignItems: "center",
    marginVertical: 40,
    paddingTop: 10,
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
  },
});

export default LogScreen;
