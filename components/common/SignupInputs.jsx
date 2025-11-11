import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";


export default function SignupInputs({ name, setName, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    // <SafeAreaView style={styles.container}>
    <View style={styles.inputContainer}>
      {/* Email Input */}
        <View style={styles.inputWrapper}>
        <Feather name="mail" size={20} color="#aaa" style={styles.icon} />
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Username"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputWrapper}>
        <Feather name="mail" size={20} color="#aaa" style={styles.icon} />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email or Phone Number"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputWrapper}>
        <Feather name="lock" size={20} color="#aaa" style={styles.icon} />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Feather
            name={showPassword ? "eye-off" : "eye"}
            size={20}
            color="#aaa"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.inputWrapper}>
        <Feather name="lock" size={20} color="#aaa" style={styles.icon} />
        <TextInput
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder=" Confirm Password"
          placeholderTextColor="#aaa"
          secureTextEntry={!showConfirmPassword}
        />
        <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
          <Feather
            name={showConfirmPassword ? "eye-off" : "eye"}
            size={20}
            color="#aaa"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#000",
  },
    inputContainer: {
    // flex: 1,
    // padding: 20,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
  },
  icon: {
    marginHorizontal: 5,
  },
  input: {
    flex: 1,
    color: "#fff",           // visible white text
    fontSize: 16,
    paddingVertical: 18,
  },
});
