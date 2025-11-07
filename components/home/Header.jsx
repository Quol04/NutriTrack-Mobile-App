import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "@/styles/colors";
import NotificationIcon from "@/components/common/NotificationIcon";

const Header = ({ name, date }) => (
  <View style={styles.header}>
    <View>
      <Text style={styles.greeting}>Hello, {name} !</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
    <NotificationIcon
      notifications={[
        { title: "Meal Reminder", desc: "Time for your breakfast!" },
        { title: "Weekly Report", desc: "Your progress summary is ready." },
        { title: "Community Report", desc: "Your progress summary is ready." },
        { title: "Weekly Report", desc: "Your progress summary is ready." },
        { title: "Weekly Report", desc: "Your progress summary is ready." },
        { title: "Weekly Report", desc: "Your progress summary is ready." }
      ]}
       />
  </View>
);

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    marginTop: 40,
  },
  greeting: {
    fontSize: 16,
    color: "#333",
    marginBottom: 4,
  },
  date: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
  },
  notificationIcon: {
    backgroundColor: colors.grayLight,
    borderRadius: 16,
    padding: 10,
    position: "relative",
  },
  notificationDot: {
    width: 8,
    height: 8,
    backgroundColor: "red",
    borderRadius: 50,
    position: "absolute",
    top: 8,
    right: 8,
  },
});
