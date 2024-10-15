import { TextInput, TextInputProps } from "react-native";
import { style } from "./styles";
import { colors } from "@/styles/colors";

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      style={style.container}
      placeholderTextColor={colors.gray[400]}
      {...rest}
    />
  );
}
