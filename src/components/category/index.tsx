import { Text, Pressable, PressableProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "@/styles/colors";
import { style } from "./styles";

type Props = PressableProps & {
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export function Category({ name, icon, ...rest }: Props) {
  return (
    <Pressable style={style.container} {...rest}>
      <MaterialIcons name={icon} size={16} color={colors.gray[400]} />
      <Text style={style.name}>{name}</Text>
    </Pressable>
  );
}
