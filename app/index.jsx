import { images } from "@/constants";
import { styles } from "@/styles";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Index() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const { width } = Dimensions.get("window");
 
 
  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  const handleGetStarted = () => {
    router.push('/mealLogging');
  }

  const handleLogin = () => {
    router.push('/loginScreen');
  }


  return (
    <SafeAreaView style={styles.container}>
      {/* Image Carousel */}
      <View style={styles.carouselContainer}>
        <FlatList
          data={images}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={handleScroll}
          scrollEventThrottle={16}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.imageWrapper}>
              <Image source={item} style={styles.image} resizeMode="cover" />
            </View>
          )}
        />
      </View>

      {/* Dots Indicator */}
      <View style={styles.dotContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index && styles.activeDot,
            ]}
          />
        ))}
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.subheading}>FOR FITNESS ENTHUSIASTS</Text>
        <Text style={styles.title}>NutriTrack</Text>
        <Text style={styles.subtitle}>
          All-round Nutritional and Wellness Tracker
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.primaryButton} onPress={handleGetStarted}>
          <Text style={styles.primaryButtonText}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton} onPress={handleLogin}>
          <Text style={styles.secondaryButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

