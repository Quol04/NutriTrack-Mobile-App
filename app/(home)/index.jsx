import SectionHeader from "@/components/common/SectionHeader";
import CommunityCard from "@/components/home/CommunityCard";
import DailyCheckIn from "@/components/home/DailyCheckIn";
import Header from "@/components/home/Header";
import MealTimelineCard from "@/components/home/MealTimelineCard";
import SmartSuggestionCard from "@/components/home/SmartSuggestionCard";
import { meals } from "@/constants/mealsTimetable";
import colors from "@/styles/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// prefer require for jwt-decode to avoid default interop issues in Metro
let jwt_decode;
try {
  // CommonJS require works in React Native bundler
  // eslint-disable-next-line global-require
  jwt_decode = require("jwt-decode");
} catch (e) {
  jwt_decode = null;
}

function formatDateWithOrdinal(d) {
  const day = d.getDate();
  const month = d.toLocaleString("en-GB", { month: "long" });
  const year = d.getFullYear();
  // ordinal
  const mod10 = day % 10;
  const mod100 = day % 100;
  let ord = "th";
  if (mod10 === 1 && mod100 !== 11) ord = "st";
  else if (mod10 === 2 && mod100 !== 12) ord = "nd";
  else if (mod10 === 3 && mod100 !== 13) ord = "rd";
  const time = d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  return `${day}${ord} ${month} ${year}`;
}

const NutriTrackHome = () => {
  const [userName, setUserName] = useState("");
  const [dateStr, setDateStr] = useState(formatDateWithOrdinal(new Date()));

   const openCamera = () => {
    router.push('/MealLogCamera');
    // console.log("Camera opened");
  }

  useEffect(() => {
    let mounted = true;
    const safeDecode = (token) => {
      try {
        if (typeof jwt_decode === "function") return jwt_decode(token);
        // some bundlers put the fn under .default
        if (jwt_decode && typeof jwt_decode.default === "function") return jwt_decode.default(token);
      } catch (e) {
        // fall through to manual decode
      }

      // manual decode fallback (lightweight)
      try {
        const parts = token.split('.');
        if (parts.length < 2) return null;
        const b64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');
        // atob may not exist in some RN environments, try global atob first
        let jsonStr;
        if (typeof atob === 'function') {
          jsonStr = decodeURIComponent(atob(b64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          }).join(''));
        } else if (typeof Buffer !== 'undefined') {
          jsonStr = Buffer.from(b64, 'base64').toString('utf8');
        } else {
          return null;
        }
        return JSON.parse(jsonStr);
      } catch (e) {
        return null;
      }
    };

    const loadUser = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (token) {
          const payload = safeDecode(token);
          // try common shapes: payload.user?.name or payload.name
          const name = payload?.user?.name || payload?.name || "";
          if (mounted && name) setUserName(name);
        }
      } catch (err) {
        // ignore decode errors
        console.warn("Failed to decode token for user name", err?.message || err);
      }
    };

    loadUser();

    const tick = () => setDateStr(formatDateWithOrdinal(new Date()));
    const timer = setInterval(tick, 60_000); // update every minute
    return () => {
      mounted = false;
      clearInterval(timer);
    };
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header name={userName || "Samuel"} date={dateStr} />
          <SectionHeader subtitle="DIETARY ASSISTANT" title={"Smart\nSuggestions"} />
          <DailyCheckIn />
          <View style={{ padding: 16 }}>
            <MealTimelineCard meals={meals} onLogMeal={openCamera} />
          </View>
          <SmartSuggestionCard onPress={() => router.push("/(home)/smart")} />
          <CommunityCard onPress={() => router.push("/(home)/community")} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default NutriTrackHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
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
});

