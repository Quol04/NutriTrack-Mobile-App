import SectionHeader from "@/components/common/SectionHeader";
import CameraFrame from "@/components/logs/CameraFrame";
import IconButton from "@/components/logs/IconButton";
import MealLogList from "@/components/logs/MealLogList"; // ✅ Import reusable component
import UploadButton from "@/components/logs/UploadButton";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const LogScreen = () => {
  const [mealLogs, setMealLogs] = React.useState([]); // ✅ store meal logs locally

  const router = useRouter();
  const openCamera = () => {
    router.push('/MealLogCamera');
    // console.log("Camera opened");
  }
  return (
    <SafeAreaView style={{ flex: 1,paddingTop: 20,}}>
      <SectionHeader
        subtitle="LOG YOUR MEAL"
        title="Meal Logging"
      />
    <View style={styles.container}>
      {/* <View><Text>Take photo of meal you want logged</Text></View> */}
      <Text style={styles.instructionText}>Take photo of meal you want logged</Text>

      <View style={styles.cameraSection}>
        <CameraFrame />
      </View>

      <View style={styles.actions}>
        <UploadButton title="Upload from Gallery" />
        <IconButton icon={<Feather name="camera" size={24} color="#fff" />} onPress={openCamera} />
      </View>
       {/* ✅ Display Logged Meals */}
      <Text style={styles.subHeading}>Your Logged Meals</Text>
      <MealLogList logs={mealLogs} />
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",

  },
  instructionText: {
    fontSize: 14,
    marginLeft: 16,
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
   subHeading: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 20,
    // marginBottom: 10,
    marginLeft: 16,

  },
});

export default LogScreen;
