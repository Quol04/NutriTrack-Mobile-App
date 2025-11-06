import { View, Text, StyleSheet } from "react-native";

const LogScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Log Your meal Here (Screen)</Text>
    </View>
  );
};

export default LogScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "500",
  },
});
