import CustomTextInput from "@/components/CustomTextInput";
import PrimaryButton from "@/components/PrimaryButton";
import useAuthStore from "@/services/stores/authStore";
import { Link } from "expo-router";
import { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";

export default function Register() {
  const register = useAuthStore((state) => state.register);
  const isSigningup = useAuthStore((state) => state.isSigningup);
  const errorMessage = useAuthStore((state) => state.errorMessage);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  function handleRegister() {
    register(
      formData.username,
      formData.password,
      formData.name,
      formData.email
    );
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
          Create Accout
        </Text>
        <Text
          className="text-center font-poppinsSemiBold z-10"
          style={{ fontSize: 18 }}
        >
          Create an account so you can explore all the existing jobs
        </Text>
      </View>

      {/* Form */}
      <View className="w-full gap-7 p-6">
        <CustomTextInput
          placeholder="Name"
          value={formData.name}
          onChangeText={(text) => setFormData({ ...formData, name: text })}
        />
        <CustomTextInput
          placeholder="username"
          value={formData.username}
          onChangeText={(text) => setFormData({ ...formData, username: text })}
        />
        <CustomTextInput
          placeholder="Email"
          keyboardType="email-address"
          value={formData.email}
          onChangeText={(text) => setFormData({ ...formData, email: text })}
        />
        <CustomTextInput
          placeholder="Password"
          // keyboardType="visible-password"
          secureText={true}
          value={formData.password}
          onChangeText={(text) => setFormData({ ...formData, password: text })}
        />

        {errorMessage && (
          <Text className="text-red-500 text-center">{errorMessage}</Text>
        )}

        <Text className="font-poppinsSemiBold text-primary self-end">
          Forgot your password?
        </Text>

        <PrimaryButton
          title="Sign up"
          onPress={handleRegister}
          disabled={isSigningup}
        />

        <Link href={"/login"} replace className="z-10">
          <Text className="text-center font-poppinsSemiBold text-textSecondary">
            Already have an account
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
