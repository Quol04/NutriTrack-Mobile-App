import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
// import { router } from "expo-router";
import { useRouter } from "expo-router";

export default function MealLogCamera() {
  const [mealImage, setMealImage] = useState(null);
  const [mealName, setMealName] = useState("");
  const [mealNotes, setMealNotes] = useState("");

    const router = useRouter();

  // Open the camera
  const openCamera = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) {
      Alert.alert("Permission required", "Camera access is needed to log meals.");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });

    if (!result.canceled) {
      setMealImage(result.assets[0].uri);
    }
  };

  // Handle meal logging
  const handleLogMeal = () => {
    if (!mealImage || !mealName.trim()) {
      Alert.alert("Missing details", "Please capture an image and enter a meal name.");
      return;
    }

    // You can send this data to your API or local storage here
    Alert.alert("Meal Logged", `You logged: ${mealName}`);
    setMealName("");
    setMealNotes("");
    setMealImage(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Log Your Meal</Text>

      {/* Image Preview or Placeholder */}
      <TouchableOpacity style={styles.imageContainer} onPress={openCamera}>
        {mealImage ? (
          <Image source={{ uri: mealImage }} style={styles.image} />
        ) : (
          <View style={styles.placeholder}>
            <Ionicons name="camera-outline" size={40} color="#888" />
            <Text style={styles.placeholderText}>Tap to capture your meal</Text>
          </View>
        )}
      </TouchableOpacity>

      {/* Input fields */}
      <TextInput
        style={styles.input}
        placeholder="Meal name (e.g. Chicken Salad)"
        value={mealName}
        onChangeText={setMealName}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Additional notes (optional)"
        multiline
        value={mealNotes}
        onChangeText={setMealNotes}
      />

      {/* Log Button */}
       <TouchableOpacity style={styles.logButton} onPress={
        handleLogMeal
      }>
        <Text style={styles.logButtonText}>Save Meal</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.closeButton} onPress={() => {
        router.back();
        // handleLogMeal();
      }}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    flexGrow: 1,
  },
  heading: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
    color: "#222",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f3f3f3",
    borderRadius: 16,
    height: 220,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  placeholder: {
    alignItems: "center",
    justifyContent: "center",
  },
  placeholderText: {
    color: "#666",
    fontSize: 14,
    marginTop: 8,
  },
  input: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#eee",
    marginBottom: 12,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  logButton: {
    backgroundColor: "#00B060",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 10,
  },
   logButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
   closeButton: {
    backgroundColor: "#cdd0cfff",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 10,
  },
  closeButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
