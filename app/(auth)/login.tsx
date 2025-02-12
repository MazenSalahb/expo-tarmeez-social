import CustomTextInput from "@/components/CustomTextInput";
import PrimaryButton from "@/components/PrimaryButton";
import { Link } from "expo-router";
import { View, Text, Image, Pressable, ScrollView } from "react-native";

export default function Login() {
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
        <CustomTextInput placeholder="Email" keyboardType="email-address" />
        <CustomTextInput
          placeholder="Password"
          keyboardType="visible-password"
        />

        <Text className="font-poppinsSemiBold text-primary self-end">
          Forgot your password?
        </Text>

        <PrimaryButton title="Sign in" />

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
