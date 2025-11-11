import MealLogCamera from '@/components/logs/MealLogCamera';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
// import { router } from 'expo-router';
import { useRouter } from 'expo-router';

export default function MealLogCameraRoute() {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MealLogCamera />
       {/* <TouchableOpacity style={styles.closeButton} onPress={() => router.back()}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity> */}
    </SafeAreaView>
  );
}


