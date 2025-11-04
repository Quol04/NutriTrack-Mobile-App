import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignupScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleSignup = () => {
    let newErrors = {};

    if (!username.trim()) newErrors.username = "Username is required.";
    if (!email.trim()) newErrors.email = "Email or phone is required.";
    else if (!validateEmail(email)) newErrors.email = "Invalid email format.";
    if (!password) newErrors.password = "Password is required.";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    if (!confirmPassword) newErrors.confirmPassword = "Please confirm password.";
    else if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // All checks passed
      Alert.alert("Signup Successful!", "Welcome to NutriTrack 🎉");
      // navigation.navigate("Login"); // Uncomment when connected to backend or real navigation flow
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Text style={styles.logoSymbol}>⧉</Text>
        <Text style={styles.logoText}>NutriTrack</Text>
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        {/* Username */}
        <TextInput
          label="Username"
          mode="outlined"
          value={username}
          onChangeText={setUsername}
          placeholder="Johndoe"
          left={<TextInput.Icon icon="account-outline" />}
          style={styles.input}
          theme={{ colors: { text: "#fff", placeholder: "#aaa" } }}
        />
        {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}

        {/* Email */}
        <TextInput
          label="Email or Phone Number"
          mode="outlined"
          value={email}
          onChangeText={setEmail}
          placeholder="Johndoe@gmail.com"
          left={<TextInput.Icon icon="email-outline" />}
          style={styles.input}
          theme={{ colors: { text: "#fff", placeholder: "#aaa" } }}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

        {/* Password */}
        <TextInput
          label="Password"
          mode="outlined"
          value={password}
          onChangeText={setPassword}
          placeholder="********"
          secureTextEntry={!showPassword}
          left={<TextInput.Icon icon="lock-outline" />}
          right={
            <TextInput.Icon
              icon={showPassword ? "eye-off-outline" : "eye-outline"}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
          style={styles.input}
          theme={{ colors: { text: "#fff", placeholder: "#aaa" } }}
        />
        {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

        {/* Confirm Password */}
        <TextInput
          label="Confirm Password"
          mode="outlined"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="********"
          secureTextEntry={!showConfirmPassword}
          left={<TextInput.Icon icon="lock-outline" />}
          right={
            <TextInput.Icon
              icon={showConfirmPassword ? "eye-off-outline" : "eye-outline"}
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          }
          style={styles.input}
          theme={{ colors: { text: "#fff", placeholder: "#aaa" } }}
        />
        {errors.confirmPassword && (
          <Text style={styles.errorText}>{errors.confirmPassword}</Text>
        )}

        <TouchableOpacity>
          <Text style={styles.resetText}>Forgot password? Reset here</Text>
        </TouchableOpacity>
      </View>

      {/* Signup Button */}
      <Button
        mode="contained"
        onPress={handleSignup}
        style={styles.signupButton}
        labelStyle={{ color: "#000", fontSize: 16 }}
        buttonColor="#FFEFE7"
      >
        Sign Up
      </Button>

      {/* Login Redirect */}
      <Text style={styles.loginText}>
        Already have an Account?{" "}
        <Text
          style={styles.loginLink}
          onPress={() => router.push('/auth/loginScreen')}
        >
          Sign in here
        </Text>
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 25,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  logoSymbol: {
    fontSize: 40,
    color: "#FFEFE7",
  },
  logoText: {
    color: "#FFEFE7",
    fontSize: 28,
    fontWeight: "600",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 25,
  },
  input: {
    backgroundColor: "transparent",
    marginBottom: 10,
  },
  resetText: {
    color: "#ccc",
    textAlign: "right",
    fontSize: 13,
    marginTop: 5,
  },
  signupButton: {
    width: "100%",
    borderRadius: 10,
    paddingVertical: 5,
    marginBottom: 20,
  },
  loginText: {
    color: "#fff",
    fontSize: 14,
  },
  loginLink: {
    color: "#FFEFE7",
    textDecorationLine: "underline",
  },
  errorText: {
    color: "#ff7070",
    fontSize: 12,
    marginBottom: 8,
  },
});
