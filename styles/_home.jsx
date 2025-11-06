import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },

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
  },
  date: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
  },
  notificationIcon: {
    backgroundColor: "#F2F2F2",
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

  sectionHeader: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  subHeading: {
    color: "#A3A3A3",
    fontSize: 12,
    letterSpacing: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#000",
  },

  dailyCheckIn: {
    margin: 20,
    backgroundColor: "#000",
    borderRadius: 16,
    padding: 16,
  },
  dailyTitle: {
    color: "white",
    fontSize: 16,
    marginBottom: 10,
  },
  dayList: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  dayBox: {
    backgroundColor: "#1C1C1C",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  activeDayBox: {
    backgroundColor: "#6DF57D",
  },
  dayText: {
    color: "#ccc",
    fontSize: 12,
  },
  activeDayText: {
    color: "#000",
    fontWeight: "600",
  },

  mealProgress: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 14,
  },
  progressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  progressBar: {
    height: 4,
    backgroundColor: "#ddd",
    borderRadius: 10,
    marginBottom: 8,
    position: "relative",
  },
  dot: {
    position: "absolute",
    top: -4,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#63D471",
  },

  logMealButton: {
    marginTop: 16,
    backgroundColor: "#FF3B30",
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
  },
  logMealText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
  },

  suggestionCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginHorizontal: 20,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 12,
    color: "#777",
    fontWeight: "500",
  },
  cardQuestion: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginVertical: 4,
  },
  greenButton: {
    backgroundColor: "#4ADE80",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginTop: 8,
  },
  greenButtonText: {
    fontWeight: "600",
    color: "#000",
  },
  foodImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginLeft: 12,
  },

  communityCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginHorizontal: 20,
    padding: 16,
    position: "relative",
  },
  communityTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
  },
  communitySubtitle: {
    color: "#777",
    marginTop: 4,
  },
  orangeButton: {
    backgroundColor: "#FF6A00",
    borderRadius: 8,
    padding: 10,
    position: "absolute",
    right: 16,
    bottom: 16,
  },

  bottomNav: {
    backgroundColor: "#000",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 70,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export {styles}