import CustomTextInput from "@/components/CustomTextInput";
import PrimaryButton from "@/components/PrimaryButton";
import useAuthStore from "@/services/stores/authStore";
import { Link } from "expo-router";
import { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";

export default function Login() {
  const login = useAuthStore((state) => state.login);
  const isLoginIn = useAuthStore((state) => state.isLoginIn);
  const errorMessage = useAuthStore((state) => state.errorMessage);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleLogin() {
    login(formData.username, formData.password);
  }

  return (
    <ScrollView
      className="bg-white"
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 48,
      }}
    >
      {/* <View className="w-full"> */}
      <Image
        source={require("../../assets/images/ellipse1.png")}
        className="absolute end-0 top-0"
      />
      <Image
        source={require("../../assets/images/ellipse2.png")}
        className="absolute end-0 top-0"
      />

      <View className="gap-6 p-6">
        <Text
          className="text-center font-poppinsSemiBold text-primary"
          style={{ fontSize: 32 }}
        >
          Login here
        </Text>
        <Text
          className="text-center font-poppinsSemiBold z-10"
          style={{ fontSize: 18 }}
        >
          Welcome back you've{"\n"}been missed!
        </Text>
      </View>

      {/* Form */}
      <View className="w-full gap-7 p-6">
        <CustomTextInput
          placeholder="Username"
          value={formData.username}
          onChangeText={(text) => setFormData({ ...formData, username: text })}
        />
        <CustomTextInput
          placeholder="Password"
          secureText={true}
          value={formData.password}
          onChangeText={(text) => setFormData({ ...formData, password: text })}
        />

        {errorMessage && (
          <Text className="font-poppinsSemiBold text-center text-red-500">
            {errorMessage}
          </Text>
        )}

        <Text className="font-poppinsSemiBold text-primary self-end">
          Forgot your password?
        </Text>

        <PrimaryButton
          title="Sign in"
          onPress={handleLogin}
          disabled={isLoginIn}
        />

        <Link href={"/register"} replace className="z-10">
          <Text className="text-center font-poppinsSemiBold text-textSecondary">
            Create new account
          </Text>
        </Link>
      </View>

      <Image
        source={require("../../assets/images/rectangle3.png")}
        className="absolute bottom-0 left-0"
      />
      <Image
        source={require("../../assets/images/rectangle4.png")}
        className="absolute bottom-0 left-0"
      />
    </ScrollView>
  );
}
