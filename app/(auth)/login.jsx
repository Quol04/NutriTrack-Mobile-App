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
import { TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { loginUser } from "./auth";


export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
    const handleLogin = async () => {
    try {
      setLoading(true);
      const token = await loginUser(email, password);
      Alert.alert("Success", "Login successful!");
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
            <View style={styles.inputContainer}>
              <TextInput
                label="Email or Phone Number"
                mode="outlined"
                value={email}
                onChangeText={setEmail}
                placeholder="Johndoe@gmail.com"
                left={<TextInput.Icon icon="email-outline"  />}
                style={styles.input}
                editable={!loading}
                theme={{
                      colors: {
                        text: "#fff",             // typed text
                        placeholder: "#aaa",      // placeholder text
                        primary: "#fff",          // focused outline color
                        outline: "#888",          // unfocused outline
                        background: "#fff" // transparent background
                      },
                    }}
                    placeholderTextColor="#fff"
                
                // {{ colors: { text: "#fff", placeholder: "#aaa" } }}
              />

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
                editable={!loading}
                theme={{
                      colors: {
                        text: "#fff",             // typed text
                        placeholder: "#aaa",      // placeholder text
                        primary: "#fff",          // focused outline color
                        outline: "#888",          // unfocused outline
                        background: "transparent" // transparent background
                      },
                    }}
                    placeholderTextColor="#aaa"


                // {{ colors: { text: "#fff", placeholder: "#fff" } }}
              />

              <TouchableOpacity>
                <Text style={styles.resetText}>Forgot password? Reset here</Text>
              </TouchableOpacity>
            </View>

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
  inputContainer: {
    width: "100%",
    marginBottom: 30,
  },
  input: {
    backgroundColor: "#222",
    marginBottom: 15,
    color: "#fff",
  },
  resetText: {
    color: "#ccc",
    textAlign: "right",
    fontSize: 13,
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
  },
  signupLink: {
    color: "#FFEFE7",
    textDecorationLine: "underline",
  },
  loginButtonDisabled: {
    opacity: 0.6,
  },
});
