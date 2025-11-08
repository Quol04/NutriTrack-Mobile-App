import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
} from "react-native";
import { Video } from "expo-av";
import { Ionicons } from "@expo/vector-icons";
// import { darkTheme } from "@/styles/themes";
// import {light, dark} from "@/styles/themes";


const { width, height } = Dimensions.get("window");

export default function VideoCard({ item, theme }) {
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
      {/* Card */}
      <TouchableOpacity style={[styles.card, ]} onPress={openModal}>
        <Image source={{ uri: item.image }} style={styles.image} />
        {item.video && (
          <View style={styles.playOverlay}>
            <Ionicons name="play-circle" size={48} color="#fff" />
          </View>
        )}
        <View style={styles.overlay}>
          <Text style={[styles.title, { color: "#fff" }]} numberOfLines={2}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>

      {/* Modal */}
      <Modal visible={visible} transparent animationType="none">
        <Animated.View
          style={[
            styles.modalContainer,
            {
              backgroundColor: "rgba(0,0,0,0.9)",
              opacity: fadeAnim,
            },
          ]}
        >
          <View style={styles.videoContainer}>
            <Video
              source={{ uri: item.video }}
              rate={1.0}
              volume={1.0}
              resizeMode="contain"
              shouldPlay
              useNativeControls
              style={styles.video}
            />

            <TouchableOpacity style={styles.closeBtn} onPress={closeModal}>
              <Ionicons name="close-circle" size={36} color="#fff" />
            </TouchableOpacity>
          </View>
        </Animated.View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 180,
    height: 120,
    borderRadius: 14,
    marginRight: 14,
    overflow: "hidden",
    backgroundColor: "#ddd",
  },
  image: {
    width: "100%",
    height: 180,
  },
  playOverlay: {
    position: "absolute",
    top: "40%",
    left: "40%",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.9,
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  videoContainer: {
    width: width * 0.9,
    height: height * 0.5,
    backgroundColor: "#000",
    borderRadius: 12,
    overflow: "hidden",
    justifyContent: "center",
  },
  video: {
    width: "100%",
    height: "100%",
  },
  closeBtn: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});
