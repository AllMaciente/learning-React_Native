import { Text, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "@/styles/colors";
import { style } from "./styles";

export function Category() {
  return (
    <Pressable style={style.container}>
      <MaterialIcons name="code" size={16} color={colors.gray[400]} />
      <Text style={style.name}>Projetos</Text>
    </Pressable>
  );
}
