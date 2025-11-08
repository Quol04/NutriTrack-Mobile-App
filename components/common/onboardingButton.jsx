import { width } from "@/styles/_smartStyles";
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet,Dimensions } from "react-native";

export default function OnboardingButtons({ onGetStarted, onLogin }) {
    const { width } = Dimensions.get("window");
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.primaryButton} onPress={onGetStarted}>
        <Text style={styles.primaryButtonText}>Get Started</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton} onPress={onLogin}>
        <Text style={styles.secondaryButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
   buttonContainer: {
    width: width * 0.85,
    alignItems: "center",
  },
  primaryButton: {
    backgroundColor: "#F5F0EB",
    width: "100%",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 14,
  },
  primaryButtonText: {
    color: "#000",
    fontWeight: "600",
    fontSize: 16,
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: "#F5F0EB",
    width: "100%",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  secondaryButtonText: {
    color: "#F5F0EB",
    fontWeight: "600",
    fontSize: 16,
  },
});
