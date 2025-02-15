import { View, Text, StyleSheet } from "react-native";
import { useImage, Image } from "expo-image";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Post } from "@/constants/types";

export default function PostItem({ post }: { post: Post }) {
  const image =
    post.image && typeof post.image === "string"
      ? useImage(post.image.replace("http://", "https://"), {
          maxHeight: 380,
        })
      : null;
  return (
    <View className="px-6">
      <View className="p-4 rounded-xl bg-white">
        {/* User info */}
        <View className="flex-row items-center">
          <View className="flex-row gap-1 items-center">
            <Image
              source={{
                uri:
                  typeof post.author.profile_image === "string"
                    ? post.author.profile_image
                    : "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
              }}
              contentFit="cover"
              style={{
                width: 48,
                height: 48,
                borderRadius: 24,
              }}
            />
            <View>
              <Text
                className="font-bold ml-2"
                style={{
                  fontFamily: "Poppins_500Medium",
                }}
              >
                {post.author.username}
              </Text>
              <Text
                className="text-xs ml-2"
                style={{
                  fontFamily: "Poppins_400Regular",
                }}
              >
                {post.created_at}
              </Text>
            </View>
          </View>
        </View>
        {/* End User info */}
        {/* Post content */}
        {image && (
          <Image
            source={image}
            style={{
              width: "100%",
              height: image?.height,
              borderRadius: 12,
              marginVertical: 12,
            }}
          />
        )}

        <Text
          className="text-lg"
          style={{
            fontFamily: "Poppins_500Medium",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Text
          className="text-sm mt-2"
          style={{
            fontFamily: "Poppins_400Regular",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          ultricies, mi a lacinia ultricies, nunc nulla aliquam libero, a
          efficitur erat justo in nunc. Nullam ultricies, mi a lacinia
          ultricies, nunc nulla aliquam libero, a efficitur erat justo in nunc.
        </Text>

        <View
          style={{
            borderBottomColor: "rgba(0,0,0,0.1)",
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginVertical: 12,
          }}
        />

        <View className="flex-row items-center justify-between">
          <View className="flex-row gap-3">
            <View className="flex-row gap-1.5 items-center">
              <AntDesign name="like2" size={20} color="#000000" />
              <Text>349</Text>
            </View>
            <View className="flex-row gap-1.5 items-center">
              <MaterialCommunityIcons
                name="comment-multiple-outline"
                size={20}
                color="black"
              />
              <Text>760</Text>
            </View>
          </View>
          <View className="flex-row gap-6">
            <View className="flex-row gap-1.5 items-center">
              <AntDesign name="sharealt" size={20} color="black" />
            </View>
            <View className="flex-row gap-1.5 items-center">
              <Ionicons name="bookmarks-outline" size={24} color="black" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
