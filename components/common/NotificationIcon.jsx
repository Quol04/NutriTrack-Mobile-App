import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import NotificationModal from "../modals/NotificationModal";

const NotificationIcon = ({ notifications }) => {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => setVisible(true)}
      >
        <Feather name="bell" size={22} color="#000" />
        {notifications.length > 0 && <View style={styles.dot} />}
      </TouchableOpacity>

      <NotificationModal
        visible={visible}
        onClose={() => setVisible(false)}
        notifications={notifications}
      />
    </>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: "#F2F2F2",
    borderRadius: 16,
    padding: 10,
    position: "relative",
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: "red",
    borderRadius: 50,
    position: "absolute",
    top: 8,
    right: 8,
  },
});

export default NotificationIcon;
