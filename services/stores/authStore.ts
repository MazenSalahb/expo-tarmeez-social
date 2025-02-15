import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosInstance from "@/lib/axios";
import axios from "axios";

type User = {
  username: string;
  name: string;
  email: string;
  id: number;
  profile_image?: string | undefined;
};

type AuthStoreType = {
  user?: User | undefined;
  token?: string | undefined;
  isCheckingAuth: boolean;
  isLoginIn: boolean;
  isSigningup: boolean;
  errorMessage?: string | undefined;

  login: (username: string, password: string) => void;
  register: (
    username: string,
    password: string,
    name: string,
    email: string,
    image?: string | undefined
  ) => void;
  checkAuth: () => void;
  logout: () => void;
};

const useAuthStore = create<AuthStoreType>((set) => ({
  isCheckingAuth: true,
  isLoginIn: false,
  isSigningup: false,

  async login(username, password) {
    set({ isLoginIn: true });
    try {
      const res = await axiosInstance.post("/login", { username, password });
      await AsyncStorage.setItem("token", res.data.token);
      await AsyncStorage.setItem("user", JSON.stringify(res.data.user));
      set({ user: res.data.user, token: res.data.token });
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error) && error.response) {
        set({ errorMessage: error.response.data.message });
      } else {
        set({ errorMessage: "An unknown error occurred" });
      }
    } finally {
      set({ isLoginIn: false });
    }
  },

  async register(username, password, name, email, image) {
    set({ isSigningup: true });
    try {
      const res = await axiosInstance.post("/register", {
        username,
        password,
        name,
        email,
        // image,
      });

      await AsyncStorage.setItem("token", res.data.token);
      await AsyncStorage.setItem("user", JSON.stringify(res.data.user));
      set({ user: res.data.user, token: res.data.token });
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error) && error.response) {
        set({ errorMessage: error.response.data.message });
      } else {
        set({ errorMessage: "An unknown error occurred" });
      }
    } finally {
      set({ isSigningup: false });
    }
  },

  async checkAuth() {
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        return;
      }
      const user = await AsyncStorage.getItem("user");

      set({ token, user: user ? JSON.parse(user) : undefined });
    } catch (error) {
      console.log(error);
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  async logout() {
    await AsyncStorage.removeItem("token");
    set({ user: undefined, token: undefined });
  },
}));

export default useAuthStore;
