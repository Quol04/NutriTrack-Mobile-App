// components/MealLogList.js
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function MealLogList({ logs }) {
  if (!logs || logs.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No meal logs yet. Start logging!</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <View style={styles.logCard}>
      <View style={styles.logHeader}>
        <Text style={styles.foodName}>{item.food?.name || "Unknown Food"}</Text>
        <Text style={styles.date}>
          {new Date(item.date).toLocaleDateString()}
        </Text>
      </View>
      <Text style={styles.serving}>Serving Size: {item.servingSize}</Text>
    </View>
  );

  return (
    <FlatList
      data={logs}
      renderItem={renderItem}
      // use a robust key extractor: prefer `_id`, then `id`, then `date` string, then index
      keyExtractor={(item, index) => {
        if (!item) return String(index);
        if (item._id) return String(item._id);
        if (item.id) return String(item.id);
        if (item.date) {
          try {
            return typeof item.date === 'string' ? item.date : new Date(item.date).toISOString();
          } catch (e) {
            // fall through
          }
        }
        return String(index);
      }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.listContainer}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 30,
  },
  emptyContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  emptyText: {
    color: "#888",
    fontSize: 14,
  },
  logCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginTop: 10,

  },
  logHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  foodName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  date: {
    fontSize: 12,
    color: "#888",
  },
  serving: {
    marginTop: 6,
    fontSize: 14,
    color: "#555",
  },
});
