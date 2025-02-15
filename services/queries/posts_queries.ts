import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../apis/posts_api";
export function useGetPosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
}
