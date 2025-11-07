import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
// import { navStyles } from "@/styles/_navStyles";


const HomeRootLayout = () => {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor:"#34967C",
            headerShown: false,
            
        }} >
            <Tabs.Screen name="index" options={{
                title: "Home",
                tabBarIcon: ({color}) => <Ionicons name="home" size={24} color={color} />
            }} />
            <Tabs.Screen name="smart" options={{
                title:"Suggestions",
                // headerShown: true,
                tabBarIcon: ({color}) => <Ionicons name="restaurant-outline" size={24} color={color}/>
            }} />
            <Tabs.Screen name="log" options={{
                title:"Log",
                tabBarIcon:({color})=> <MaterialIcons name="camera-alt" size={27} color={color}/>
            }} />
            <Tabs.Screen name="community" options={{
                title:"Community",
                tabBarIcon: ({color}) => <Ionicons name="people-outline" size={24} color={color}/>
            }} />
            <Tabs.Screen name="stats" options={{
                title:"Stats",
                tabBarIcon: ({color}) => <Feather name="edit-3" size={24} color={color}/>
            }} />

        </Tabs>
    );
}
 export default HomeRootLayout;

