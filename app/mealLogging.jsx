import React, { useRef, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { slides } from "@/constants/";
import {styles} from "@/styles/";
import { useRouter } from "expo-router";



export default function OnboardingScreen({ navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  
  const { width, height } = Dimensions.get("window");

  const router = useRouter();

  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      router.push('/auth/loginScreen');
      // Navigate to your main app screen here
      console.log("Onboarding finished");
    }
  };

  const handleSkip = () => {
    flatListRef.current.scrollToIndex({ index: slides.length - 1 });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        ref={flatListRef}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <ImageBackground
            source={item.image}
            style={styles.imageBackground}
            resizeMode="cover"
          >
            <View style={styles.overlay}>
              {/* Pagination Dots */}
              <View style={styles.mealDotContainer}>
                {slides.map((_, dotIndex) => (
                  <View
                    key={dotIndex}
                    style={[
                      styles.mealDot,
                      dotIndex === currentIndex
                        ? styles.mealActiveDot
                        : styles.inactiveDot,
                    ]}
                  />
                ))}
              </View>

              {/* Text Section */}
              <View style={styles.mealTextContainer}>
                <Text style={styles.mealTitle}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>

              {/* Bottom Row */}
              <View style={styles.bottomRow}>
                {currentIndex !== slides.length - 1 ? (
                  <TouchableOpacity onPress={handleSkip}>
                    <Text style={styles.skipText}>skip</Text>
                  </TouchableOpacity>
                ) : (
                  <View />
                )}

                <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                  <Ionicons name="arrow-forward" size={22} color="#000" />
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        )}
      />
    </SafeAreaView>
  );
}

