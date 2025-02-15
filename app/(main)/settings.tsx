import PrimaryButton from "@/components/PrimaryButton";
import useAuthStore from "@/services/stores/authStore";
import { View, Text } from "react-native";

export default function Settings() {
  const username = useAuthStore((state) => state.user?.username);
  const logout = useAuthStore((state) => state.logout);
  return (
    <View className="flex-1 justify-between gap-6 p-6 bg-white">
      <Text className="text-3xl">Hello, {username}</Text>

      <PrimaryButton title="Logout" onPress={logout} />
    </View>
  );
}
