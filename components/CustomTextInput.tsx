import { View, Text, TextInput, KeyboardTypeOptions } from "react-native";

type PropsType = {
  placeholder: string;
  keyboardType?: KeyboardTypeOptions | undefined;
  secureText?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
};

export default function CustomTextInput({
  placeholder,
  keyboardType,
  secureText,
  value,
  onChangeText,
}: PropsType) {
  return (
    <TextInput
      placeholder={placeholder}
      className="font-poppinsSemiBold w-full bg-darkBg p-5 rounded-xl border-2 border-transparent focus:border-primary z-10"
      keyboardType={keyboardType ?? "default"}
      cursorColor={"#1F41BB"}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureText ?? false}
    />
  );
}
