import { View, Text, TextInput, KeyboardTypeOptions } from "react-native";

type PropsType = {
  placeholder: string;
  keyboardType?: KeyboardTypeOptions | undefined;
};

export default function CustomTextInput({
  placeholder,
  keyboardType,
}: PropsType) {
  return (
    <TextInput
      placeholder={placeholder}
      className="font-poppinsSemiBold w-full bg-darkBg p-5 rounded-xl border-2 border-transparent focus:border-primary z-10"
      keyboardType={keyboardType ?? "default"}
      cursorColor={"#1F41BB"}
    />
  );
}
