import api from "@/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Register user
export const registerUser = async (name, email, password) => {
  try {
    const res = await api.post("/api/auth/register", { name, email, password });
    console.log(res.data);
    return res.data;
  } catch (error) {
    // Normalize error to a string message when possible
    const msg =
      error?.response?.data?.message ||
      error?.response?.data ||
      error?.message ||
      "Registration failed";
    throw msg;
  }
};

// Login user
export const loginUser = async (email, password) => {
  try {
    const res = await api.post("/api/auth/login", { email, password });
  // response received (removed debug log for production)
    const token = res.data.token;
    await AsyncStorage.setItem("token", token);
    return token;
  } catch (error) {
    // Log response details to help debugging (safe for dev; remove/adjust in prod)
    try {
      // eslint-disable-next-line no-console
      console.error("loginUser error:", {
        status: error?.response?.status,
        data: error?.response?.data,
        message: error?.message,
      });
    } catch (e) {
      // ignore logging errors
    }

    const msg =
      error?.response?.data?.message ||
      error?.response?.data ||
      error?.message ||
      "Login failed";

    throw msg;
  }
};

// Logout user
export const logoutUser = async () => {
  await AsyncStorage.removeItem("token");
};

// Export a harmless default component so this file is not treated as a route
// by expo-router (app/* route files must export a default React component).
export default function _AuthPlaceholder() {
  return null;
}
