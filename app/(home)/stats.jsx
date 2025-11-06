import { View, Text, StyleSheet } from "react-native";

const StatScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your Stats Here (Screen)</Text>
    </View>
  );
};

export default StatScreen;

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
