import { Link } from "expo-router";
import { Image, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 bg-white p-6 items-center gap-12">
      {/* <View className="w-full"> */}
      <Image
        source={require("../assets/images/ellipse1.png")}
        className="absolute end-0 top-0"
      />
      <Image
        source={require("../assets/images/ellipse2.png")}
        className="absolute end-0 top-0"
      />
      {/* </View> */}

      <Image source={require("../assets/images/welcome.png")} />

      <View className="gap-6">
        <Text
          className="text-center text-primary z-10"
          style={{ fontSize: 40, fontFamily: "Poppins_600SemiBold" }}
        >
          Discover Your{"\n"}Dream Job here
        </Text>
        <Text
          className="text-center z-10"
          style={{ fontFamily: "Poppins_400Regular" }}
        >
          Explore all the existing job roles based on your{"\n"}interest and
          study major
        </Text>
      </View>

      {/* Buttons */}
      <View className="flex-row">
        <Link
          href="/login"
          className="flex-1 bg-primary py-5 rounded-xl shadow-lg shadow-primary z-10"
        >
          <Text className="text-center text-white font-poppinsSemiBold text-xl">
            Login
          </Text>
        </Link>
        <Link href="/register" className="flex-1 py-5">
          <Text className="text-center text-xl font-poppinsSemiBold">
            Register
          </Text>
        </Link>
      </View>

      <Image
        source={require("../assets/images/rectangle3.png")}
        className="absolute bottom-0 left-0"
      />
      <Image
        source={require("../assets/images/rectangle4.png")}
        className="absolute bottom-0 left-0"
      />
    </View>
  );
}
