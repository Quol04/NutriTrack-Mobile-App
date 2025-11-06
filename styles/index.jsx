import { Dimensions, StyleSheet, } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0A0A",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 40,
  },
  carouselContainer: {
    height: "45%",
  },
  imageWrapper: {
    width,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "90%",
    height: "100%",
    borderRadius: 20,
  },
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
  textContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  subheading: {
    color: "#aaa",
    fontSize: 12,
    letterSpacing: 1,
    marginBottom: 8,
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 8,
  },
  subtitle: {
    color: "#ccc",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 20,
  },
  buttonContainer: {
    width: "85%",
    alignItems: "center",
  },
  primaryButton: {
    backgroundColor: "#F5F0EB",
    width: "100%",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 12,
  },
  primaryButtonText: {
    color: "#000",
    fontWeight: "600",
    fontSize: 16,
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: "#F5F0EB",
    width: "100%",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  secondaryButtonText: {
    color: "#F5F0EB",
    fontWeight: "500",
    fontSize: 16,
  },

  // =========================meal logging styles=========================
  mealContainer: {
    flex: 1,
    backgroundColor: "#000",
  },
  imageBackground: {
    width,
    height,
    justifyContent: "flex-end",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.4)",
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  mealDotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  mealDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  mealActiveDot: {
    backgroundColor: "#fff",
    width: 10,
    height: 10,
  },
  inactiveDot: {
    backgroundColor: "rgba(255,255,255,0.5)",
  },
  mealTextContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  mealTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    color: "rgba(255,255,255,0.9)",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 20,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 100,
  },
  skipText: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 18,
    fontWeight: "700",
  },
  nextButton: {
    backgroundColor: "#fff",
    width: 45,
    height: 45,
    borderRadius: 22.5,
    justifyContent: "center",
    alignItems: "center",
  },

  // mealContainer: {
  //   flex: 1,
  //   justifyContent: "center",
  //   paddingVertical: 40,
  // },
  // background: {
  //   flex: 1,
  //   justifyContent: "center",
  //   width: "100%",
  //   height: Dimensions.get("window").height,
  // },
  // sliderImage: {
  //   width: Dimensions.get("window").width*.405,
  //   height: Dimensions.get("window").width*.425,
  //   aspectRatio: 1,
  //   alignItems: "center",
  //   // padding: 20,
  //   marginBottom: 50,
  // },
  // mealText: {
  //   justifyContent: "center",
  //   alignItems: "center",
  //   padding: 20,
  //   // position: "relative",
  // },
  // textGroup: {
  //   alignItems: "center",
  // },
  // textLarge: {
  //   color: "white",
  //   fontWeight: "800",
  //   fontSize: 40,
  //   textAlign: "center",
  //   marginBottom: 12,
  // },
  // textSmall: {
  //   color: "white",
  //   fontSize: 18,
  //   fontWeight: "200",
  //   textAlign: "center",
  // },
  // buttonGroup: {
  //   flexDirection: "row",
  //   paddingHorizontal: 20,
  //   alignItems: "center",
  //   justifyContent: "space-between",
  // },
  // button: {
  //    borderColor: "white",
  //   borderWidth: 2,
  //   borderRadius: 40,
  //   paddingVertical: 15,
  //   paddingHorizontal: 5,
  //   alignItems: "center",
  //   fontSize: 20,
  //   backgroundColor: "white",
  //   flex: 1,
  //   marginHorizontal: 10,
  // },
  // transparentButton: {
  //   borderColor: "white",
  //   borderWidth: 2,
  //   borderRadius: 40,
  //   paddingVertical: 15,
  //   paddingHorizontal: 5,
  //   alignItems: "center",
  //   fontSize: 20,
  //   flex: 1,
  //   marginHorizontal: 10,
  // },
});

export {
  styles
};
