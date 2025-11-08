import React from "react";
import { View, Image,Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "@/styles/colors";

const CommunityCard = ({onPress}) => (
  <View style={styles.container}>
    <Image 
       source={require("@/assets/images/home-community.png")} 
       style={styles.image} 
       resizeMode="contain"
       />
    <View style={styles.communitydescription}> 
      <Text style={styles.title}>Nutrition on your mind?</Text>
      <Text style={styles.subtitle}>Visit the community</Text>
    </View> 
    <TouchableOpacity style={styles.orangeButton} onPress={onPress}>
      <Feather name="arrow-up-right" size={18} color="white" />
    </TouchableOpacity>
  </View>
);

export default CommunityCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginHorizontal: 18,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    flexDirection: "row",
    alignItems: "center",
    shadowRadius: 8,
  
    // marginBottom: 20,
  },
  image: { 
    width: 60, 
    height: 60,
    marginRight: 16, 
    marginLeft: 12
  },
  communitydescription: { 
    // flex: 1, 
    // flexDirection: "column", 
    marginRight: 40
    
  },
  title: { 
    fontSize: 22, 
    // fontWeight: "600", 
    color: "#000"
   },
  subtitle: { 
    color: "#777", 
    marginTop: 4 
  },
  orangeButton: {
    backgroundColor: colors.accentOrange,
    borderRadius: 8,
    padding: 10,
    position: "absolute",
    right: 16,
    bottom: 16,
  },
});
