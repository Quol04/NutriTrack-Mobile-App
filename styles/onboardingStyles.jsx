import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

 const onboardingStyles = StyleSheet.create({
  container: {
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
});

// Export both the original name and a `styles` named export to match imports
export const styles = onboardingStyles;
export default onboardingStyles;