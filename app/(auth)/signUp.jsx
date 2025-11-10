import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { registerUser } from "./auth";
// import axios from "axios";


export default function SignupScreen() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleSignup = async() => {
    let newErrors = {};

    if (!name.trim()) newErrors.name = "Username is required.";
    if (!email.trim()) newErrors.email = "Email or phone is required.";
    else if (!validateEmail(email)) newErrors.email = "Invalid email format.";
    if (!password) newErrors.password = "Password is required.";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    if (!confirmPassword) newErrors.confirmPassword = "Please confirm password.";
    else if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    // setErrors(newErrors);

      setLoading(true);
    try {
      const message = await registerUser(name, email, password);
      Alert.alert("Success", message || "Registration successful!");
      console.log("Registration successful:", message);
      // navigate to login using expo-router
      router.replace('./login');
    } catch (err) {
      Alert.alert("Error", err?.message || "Registration failed!")
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

   

    // if (Object.keys(newErrors).length === 0) {
    //   // All checks passed
    //   Alert.alert("Signup Successful!", "Welcome to NutriTrack 🎉");
    //   // navigation.navigate("Login"); // Uncomment when connected to backend or real navigation flow
    // }

  // };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1, width: "100%" }}>
       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
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
                value={name}
                onChangeText={setName}
                placeholder="Johndoe"
                left={<TextInput.Icon icon="account-outline" />}
                style={styles.input}
                theme={{ colors: { text: "#fff", placeholder: "#fff" } }}
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
                onPress={() => router.push('/(auth)/login')}
              >
                Sign in here
              </Text>
            </Text>
        
            
            </View>
          </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
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
  inner: {
    flex: 1,
    justifyContent: "center",
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
    backgroundColor: "#222",
    marginBottom: 10,
    color: "#fff",
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
