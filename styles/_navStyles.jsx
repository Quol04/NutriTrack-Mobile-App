import { StyleSheet } from "react-native";

const navStyles = StyleSheet.create({
  bottomNav: {
    position: "absolute",
    left: 10,
    right: 16,
    bottom: 22,
    height: 64,
    borderRadius: 20,
    backgroundColor: "#000",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 10,
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 8,
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
    width: 48,
  },
});


export { navStyles };