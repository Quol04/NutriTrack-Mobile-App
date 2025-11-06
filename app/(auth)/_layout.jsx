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

import { Stack } from "expo-router";
import React from "react";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="signUp" options={{ headerShown: false }} />
    </Stack>
  );
}
