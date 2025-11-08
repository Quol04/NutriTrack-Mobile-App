import SectionHeader from "@/components/common/SectionHeader";
import BlogModal from "@/components/community/BlogModal";
import VideoCard from "@/components/community/VideoCard";
import { blogs } from "@/constants/blogData";
import { videos } from "@/constants/VideoData";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CommunityScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
          <SectionHeader subtitle="FROM NUTRITRACK" title="Community" />
         

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Feed</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.feedScroll}>
            {/* {FEED_ITEMS.map((item) => (
              <FeedCard key={item.id} item={item} />
            ))} */}
            {videos.map((item, index) => (
                <VideoCard key={index} item={item} />
              ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Blog</Text>
          <View style={styles.blogList}>
            {/* {BLOG_ITEMS.map((item) => (
              <BlogCard key={item.id} item={item} />
            ))} */}
            {blogs.map((item, index) => (
                <BlogModal key={index} item={item} />
              ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { 
    flex: 1, 
    backgroundColor: "#F7F7F7",
    paddingTop: 20,
 },
    
  container: { 
    flex: 1, 
    backgroundColor: "#F7F7F7" },
  header: { 
    paddingHorizontal: 16, 
    paddingTop: 12, 
    paddingBottom: 6 },
  fromText: { 
    fontSize: 12, 
    color: "#9AA0A6", 
    letterSpacing: 1 },
  title: { 
    fontSize: 32, 
    fontWeight: "800", 
    color: "#111", 
    marginTop: 4 
  },
  section: { 
    marginVertical: 18 ,
    // paddingHorizontal: 16
  },

  sectionTitle: { 
    fontSize: 18, 
    fontWeight: "700", 
    color: "#111", 
    marginBottom: 10, 
    paddingHorizontal: 16 },
  feedScroll: { 
    paddingHorizontal: 16 },
  blogList: { 
    paddingHorizontal: 16 },
});
