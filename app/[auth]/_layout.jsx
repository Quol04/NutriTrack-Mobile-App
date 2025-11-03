// import { Stack } from "expo-router";
// import React from "react";
// import "react-native-gesture-handler";
// import { GestureHandlerRootView } from "react-native-gesture-handler";

// export default function RootLayout() {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <Stack screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="loginScreen" options={{ headerShown: false }} />
//         <Stack.Screen name="signupScreen" options={{ headerShown: false }} />
//       </Stack>
//     </GestureHandlerRootView>
//   );
// }

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./loginScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
