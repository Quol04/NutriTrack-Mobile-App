import React from "react";
import { View, Image, FlatList, Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export default function Carousel({ images, onScroll }) {
  return (
    <View style={styles.carouselContainer}>
      <FlatList
        data={images}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={onScroll}
        scrollEventThrottle={16}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.imageWrapper}>
            <Image source={item} style={styles.image} resizeMode="cover" />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
});
