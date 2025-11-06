import React from "react";
import { View, StyleSheet } from "react-native";

const CameraFrame = () => (
  <View style={styles.frame}>
    <View style={styles.scanBox}>
      <View style={[styles.corner, styles.topLeft]} />
      <View style={[styles.corner, styles.topRight]} />
      <View style={[styles.corner, styles.bottomLeft]} />
      <View style={[styles.corner, styles.bottomRight]} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  frame: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "#000",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  scanBox: {
    width: "50%",
    height: "50%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  corner: {
    width: 25,
    height: 25,
    borderColor: "#4CD964",
    position: "absolute",
  },
  topLeft: {
    borderTopWidth: 3,
    borderLeftWidth: 3,
    top: 0,
    left: 0,
  },
  topRight: {
    borderTopWidth: 3,
    borderRightWidth: 3,
    top: 0,
    right: 0,
  },
  bottomLeft: {
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    bottom: 0,
    left: 0,
  },
  bottomRight: {
    borderBottomWidth: 3,
    borderRightWidth: 3,
    bottom: 0,
    right: 0,
  },
});

export default CameraFrame;
