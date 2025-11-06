import { View, Text, StyleSheet } from "react-native";

const CommunityScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Interract with Community (Screen)</Text>
    </View>
  );
};

export default CommunityScreen;

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
