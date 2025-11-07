import React from "react";
import { View, StyleSheet } from "react-native";

export default function DotIndicator({ total, activeIndex }) {
  return (
    <View style={styles.dotContainer}>
      {Array.from({ length: total }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            activeIndex === index && styles.activeDot,
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
   dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -15,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#555",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#fff",
    width: 10,
    height: 10,
  },
});
