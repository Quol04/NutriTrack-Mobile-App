import MealLogCamera from '@/components/logs/MealLogCamera';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
// import { router } from 'expo-router';
import { useRouter } from 'expo-router';
import SampleCamera from '@/components/logs/SampleCamera';

export default function MealLogCameraRoute() {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <MealLogCamera /> */}
     <SampleCamera />
    </SafeAreaView>
  );
}


