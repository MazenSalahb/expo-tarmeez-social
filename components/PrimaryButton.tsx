import { Text, Pressable } from "react-native";

type PropsType = {
  title: string;
  onPress?: () => void | undefined;
  disabled?: boolean;
};

export default function PrimaryButton({ title, onPress, disabled }: PropsType) {
  return (
    <Pressable
      onPress={onPress}
      className="bg-primary py-5 rounded-xl shadow-lg shadow-primary z-10 overflow-hidden"
      android_ripple={{ color: "#0F1A5A", borderless: false, foreground: true }}
      disabled={disabled}
    >
      <Text className="text-center text-white font-poppinsSemiBold text-xl">
        {title}
      </Text>
    </Pressable>
  );
}
