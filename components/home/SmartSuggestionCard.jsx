import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import colors from "@/styles/colors";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const SmartSuggestionCard = ({ onPress }) => (
  <View style={styles.card}>
    <View style={{ flex: 1 }}>
      <View style={styles.cardHeader}>
        <View style={styles.icon}>
        <MaterialCommunityIcons name="lightning-bolt-outline" size={24} color="black" />
        </View>
        <Text style={styles.cardTitle}>SMART SUGGESTION</Text>
      </View>
      <Text style={styles.cardQuestion}>What’re you hungry for today?</Text>
      <TouchableOpacity style={styles.greenButton} onPress={onPress}>
        <Text style={styles.greenButtonText}>Browse suggestions</Text>
      </TouchableOpacity>
    </View>
    <Image
      source={require("@/assets/images/food01.png")}
      style={styles.foodImage}
    />
  </View>
);

export default SmartSuggestionCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginHorizontal: 20,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    gap: 32,
    marginTop: 14,
  },
  cardHeader: { 
    flexDirection: "row", 
    alignItems: "center",
  },
  icon:{
    marginRight: 8,
    backgroundColor: "#70E000",
    borderRadius: 20,
    padding: 4,
  },
  cardTitle: { 
    fontSize: 12, 
    color: "#777", 
    fontWeight: "500" 
  },
  cardQuestion: { 
    fontSize: 16, 
    fontWeight: "600", 
    color: "#000", 
    marginVertical: 4 
  },
  greenButton: {
    backgroundColor: "#70E000",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 8,
  },
  greenButtonText: { 
    fontWeight: "600", 
    color: "#fff" 
  },
  foodImage: {
     width: 80, 
     height: 80, 
     borderRadius: 50, 
     marginLeft: 12 
    },
});
