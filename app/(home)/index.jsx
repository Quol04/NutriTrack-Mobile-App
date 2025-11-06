import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "@/styles/_home";

const NutriTrackHome = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello, Sam!</Text>
            <Text style={styles.date}>20th October 2025</Text>
          </View>
          <View style={styles.notificationIcon}>
            <Feather name="bell" size={22} color="#000" />
            <View style={styles.notificationDot} />
          </View>
        </View>

        {/* Section Title */}
        <View style={styles.sectionHeader}>
          <Text style={styles.subHeading}>DIETARY ASSISTANT</Text>
          <Text style={styles.title}>Smart{"\n"}Suggestions</Text>
        </View>

        {/* Daily Check-in */}
        <View style={styles.dailyCheckIn}>
          <Text style={styles.dailyTitle}>Daily Check-In</Text>
          <View style={styles.dayList}>
            {["24 Mon", "25 Tue", "26 Wed", "27 Thu", "28 Fri", "29 Sat", "30 Sun"].map(
              (day, index) => (
                <View
                  key={index}
                  style={[
                    styles.dayBox,
                    index === 3 && styles.activeDayBox, // active = Thu
                  ]}
                >
                  <Text
                    style={[
                      styles.dayText,
                      index === 3 && styles.activeDayText,
                    ]}
                  >
                    {day}
                  </Text>
                </View>
              )
            )}
          </View>
          <View style={styles.mealProgress}>
            <View style={styles.progressRow}>
              <Text>Breakfast</Text>
              <Text>Lunch</Text>
              <Text>Dinner</Text>
            </View>
            <View style={styles.progressBar}>
              <View style={[styles.dot, { left: "10%" }]} />
              <View style={[styles.dot, { left: "50%" }]} />
            </View>
            <View style={styles.progressRow}>
              <Text>10:03am</Text>
              <Text>2:24pm</Text>
              <Text>--:--</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.logMealButton}>
            <Text style={styles.logMealText}>Log Meal</Text>
          </TouchableOpacity>
        </View>

        {/* Smart Suggestion Card */}
        <View style={styles.suggestionCard}>
          <View style={{ flex: 1 }}>
            <Text style={styles.cardTitle}>SMART SUGGESTION</Text>
            <Text style={styles.cardQuestion}>What’re you hungry for today?</Text>
            <TouchableOpacity style={styles.greenButton}>
              <Text style={styles.greenButtonText}>Browse suggestions</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={{ uri: "https://i.ibb.co/1zjxP2k/rice.png" }}
            style={styles.foodImage}
          />
        </View>

        {/* Community Section */}
        <View style={styles.communityCard}>
          <Text style={styles.communityTitle}>Nutrition on your mind?</Text>
          <Text style={styles.communitySubtitle}>Visit the community</Text>
          <TouchableOpacity style={styles.orangeButton}>
            <Feather name="arrow-up-right" size={18} color="white" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    
    </View>
  );
};

export default NutriTrackHome;
