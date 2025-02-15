import PostItem from "@/components/PostItem";
import { useGetPosts } from "@/services/queries/posts_queries";
import { Text, View } from "react-native";
import { FlashList } from "@shopify/flash-list";

export default function Home() {
  const { data, isPending, isError } = useGetPosts();

  if (isPending) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text>Loading...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text>Error fetching posts</Text>
      </View>
    );
  }
  return (
    <View className="flex-1 bg-slate-100">
      <FlashList
        data={data}
        // keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <PostItem post={item} />}
        ItemSeparatorComponent={() => <View className="h-6" />}
        estimatedItemSize={300}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
