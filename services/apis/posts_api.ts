import { Post } from "@/constants/types";
import axiosInstance from "@/lib/axios";

export async function getPosts(): Promise<Post[]> {
  return (await axiosInstance.get("/posts?limit=20")).data.data;
}
