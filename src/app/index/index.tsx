import { Text, View } from "react-native";

import { style } from "./styles";
export default function Index() {
  return (
    <View style={style.container}>
      <Text style={style.title}>Hello</Text>
      <Text style={style.title}> React Native</Text>
      <Text>Meu App</Text>
    </View>
  );
}
