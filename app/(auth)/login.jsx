import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
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
import { SafeAreaView } from "react-native-safe-area-context";
import { loginUser } from "./auth";
import LoginInputs from "@/components/common/LoginInputs";


export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
    const handleLogin = async () => {
    try {
      setLoading(true);
      const token = await loginUser(email, password);
      // Alert.alert("Success", "Login successful!");
      router.replace('/(home)');
    } catch (err) {
      // err may be a string message from the API helper
      const message = typeof err === "string" ? err : err?.message || "Login failed";
      Alert.alert("Login Failed", message);
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
          behavior={ Platform.OS === 'ios' ? 'padding' : 'height' } 
          style={{ flex: 1, width: '100%' }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            {/* Logo */}
           <View style={styles.inner}>
            <View style={styles.logoContainer}>
              <Text style={styles.logoSymbol}>⧉</Text>
              <Text style={styles.logoText}>NutriTrack</Text>
            </View>

            {/* Input Fields */}
            <LoginInputs
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
            />
            <TouchableOpacity>
              <Text style={styles.resetText}>Forgot password? Reset here</Text>
            </TouchableOpacity>
    
          {/* Login Button */}
          
            <TouchableOpacity
              style={[styles.loginButton, loading ? styles.loginButtonDisabled : null]}
              onPress={handleLogin}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator size="small" color="#000" />
              ) : (
                <Text style={styles.loginButtonText}>Log In</Text>
              )}
            </TouchableOpacity>

            {/* Sign Up Link */}
            <Text style={styles.signupText}>
              Already have an Account?{" "}
              <Text
                style={styles.signupLink}
                onPress={() => router.push('/(auth)/signUp')}
              >
                Sign up here
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
    marginBottom: 50,
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

  resetText: {
    color: "#ccc",
    textAlign: "right",
    fontSize: 13,
    marginBottom: 20,
  },
  loginButton: {
    width: "100%",
    borderRadius: 10,
    paddingVertical: 15,
    marginBottom: 20,
    backgroundColor: "#FFEFE7",
  },
  loginButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  signupText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
  signupLink: {
    color: "#FFEFE7",
    textDecorationLine: "underline",
  },
  loginButtonDisabled: {
    opacity: 0.6,
  },
});
