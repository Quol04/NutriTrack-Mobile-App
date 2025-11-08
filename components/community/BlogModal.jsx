import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
  Animated,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default function BlogModal({ item, theme }) {
  const [visible, setVisible] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const openModal = () => {
    setVisible(true);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => setVisible(false));
  };

  return (
    <>
      {/* Blog Card */}
      <TouchableOpacity
        style={[styles.card, { backgroundColor: theme?.cardBg || "#fff" }]}
        onPress={openModal}
        activeOpacity={0.9}
      >
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.content}>
          <Text style={[styles.category, { color: theme?.accent || "#00B060" }]}>
            {item.category}
          </Text>
          <Text style={[styles.title, { color: theme?.text || "#111" }]} numberOfLines={2}>
            {item.title}
          </Text>
          <View style={styles.meta}>
            <Text style={[styles.metaText, { color: theme?.subText || "#888" }]}>
              {item.date}
            </Text>
            <View style={styles.dot} />
            <Text style={[styles.metaText, { color: theme?.subText || "#888" }]}>
              {item.time}
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.bookmarkBtn}>
          <Feather name="bookmark" size={18} color={theme?.icon || "#111"} />
        </TouchableOpacity>
      </TouchableOpacity>

      {/* Blog Modal */}
      <Modal visible={visible} transparent animationType="none">
        <Animated.View
          style={[
            styles.modalOverlay,
            { opacity: fadeAnim, backgroundColor: "rgba(0,0,0,0.8)" },
          ]}
        >
          <View style={[styles.modalContainer, { backgroundColor: theme?.background || "#fff" }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Image source={{ uri: item.image }} style={styles.modalImage} />
              <View style={styles.modalContent}>
                <Text style={[styles.modalCategory, { color: theme?.accent || "#00B060" }]}>
                  {item.category}
                </Text>
                <Text style={[styles.modalTitle, { color: theme?.text || "#111" }]}>
                  {item.title}
                </Text>
                <View style={styles.meta}>
                  <Text style={[styles.metaText, { color: theme?.subText || "#888" }]}>
                    {item.date}
                  </Text>
                  <View style={styles.dot} />
                  <Text style={[styles.metaText, { color: theme?.subText || "#888" }]}>
                    {item.time}
                  </Text>
                </View>

                <Text style={[styles.modalBody, { color: theme?.text || "#333" }]}>
                  {item.content}
                </Text>
              </View>
            </ScrollView>

            <TouchableOpacity style={styles.closeBtn} onPress={closeModal}>
              <Feather name="x-circle" size={36} color="#fff" />
            </TouchableOpacity>
          </View>
        </Animated.View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
    padding: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  content: {
    flex: 1,
  },
  category: {
    fontSize: 12,
    fontWeight: "700",
    marginBottom: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
  },
  meta: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  metaText: {
    fontSize: 12,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#ccc",
    marginHorizontal: 6,
  },
  bookmarkBtn: {
    padding: 4,
    marginLeft: 4,
  },
  // Modal
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: width * 0.9,
    height: height * 0.8,
    borderRadius: 16,
    overflow: "hidden",
  },
  modalImage: {
    width: "100%",
    height: 200,
  },
  modalContent: {
    padding: 16,
  },
  modalCategory: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 8,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
  },
  modalBody: {
    fontSize: 15,
    lineHeight: 22,
    marginTop: 12,
  },
  closeBtn: {
    position: "absolute",
    top: 12,
    right: 12,
  },
});
