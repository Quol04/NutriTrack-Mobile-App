import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import FeedCard from "@/components/community/FeedCard";
import BlogCard from "@/components/community/BlogCard";
import { FEED_ITEMS, BLOG_ITEMS } from "@/constants/communityData";
import { SafeAreaView } from "react-native-safe-area-context";
// import BottomNav from "../components/BottomNav";



export default function CommunityScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <View style={styles.header}>
          <Text style={styles.fromText}>FROM NUTRITRACK</Text>
          <Text style={styles.title}>Community</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Feed</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.feedScroll}>
            {FEED_ITEMS.map((item) => (
              <FeedCard key={item.id} item={item} />
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Blog</Text>
          <View style={styles.blogList}>
            {BLOG_ITEMS.map((item) => (
              <BlogCard key={item.id} item={item} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#F7F7F7" },
  container: { flex: 1, backgroundColor: "#F7F7F7" },
  header: { paddingHorizontal: 16, paddingTop: 12, paddingBottom: 6 },
  fromText: { fontSize: 12, color: "#9AA0A6", letterSpacing: 1 },
  title: { fontSize: 32, fontWeight: "800", color: "#111", marginTop: 4 },
  section: { marginTop: 10 },
  sectionTitle: { fontSize: 18, fontWeight: "700", color: "#111", marginBottom: 10, paddingHorizontal: 16 },
  feedScroll: { paddingHorizontal: 16 },
  blogList: { paddingHorizontal: 16 },
});
