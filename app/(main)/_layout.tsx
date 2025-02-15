import { router, Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import useAuthStore from "@/services/stores/authStore";
import { useEffect } from "react";

export default function MainLayout() {
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    if (!token) {
      router.dismissTo("/login");
    }
  }, [token]);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#1F41BB",
        headerShadowVisible: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0,
          height: 64,
          paddingVertical: 0,
        },
        tabBarItemStyle: {
          height: "100%",
          padding: 0,
          margin: 0,
        },
        tabBarIconStyle: {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 0,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <AntDesign size={28} name="home" color={color} />
          ),
          headerStyle: {
            backgroundColor: "#f1f5f9",
          },
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <AntDesign size={28} name="setting" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
