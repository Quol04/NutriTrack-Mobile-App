
import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const CARD_MARGIN = 12;

// const CARD_SIZE = (width - 48) / 2; // Two cards per row with 16px padding and 16px margin between
const CARD_SIZE = (width - CARD_MARGIN * 3 - 16) / 2; // two columns, padding/margins

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#F7F7F7" },
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },

  /* Header */
  header: {
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 8,
  },
  subHeading: {
    fontSize: 12,
    color: "#9AA0A6",
    letterSpacing: 1,
  },
  title: {
    fontSize: 36,
    lineHeight: 38,
    fontWeight: "800",
    color: "#111",
    marginTop: 6,
  },

  /* Chips row */
  chipsRow: {
    marginTop: 8,
    paddingVertical: 8,
  },
  chip: {
    backgroundColor: "#FFF",
    borderRadius: 22,
    paddingHorizontal: 18,
    paddingVertical: 10,
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 1,
  },
  chipActive: {
    backgroundColor: "#000",
    borderColor: "#000",
  },
  chipText: {
    fontSize: 14,
    color: "#333",
    fontWeight: "600",
  },
  chipTextActive: {
    color: "#fff",
  },

  /* Grid */
  gridWrap: {
    paddingHorizontal: 12,
    marginTop: 10,
  },
  cardWrapper: {
    width: CARD_SIZE,
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  cardImage: {
    width: "100%",
    height: CARD_SIZE,
  },
  heartBtn: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(255,255,255,0.92)",
    padding: 6,
    borderRadius: 20,
  },
  heartFilled: {
    // optional: add subtle scale or color tweak if favorite
  },
  cardMeta: {
    padding: 12,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#222",
  },
});

export { styles, CARD_SIZE ,width };