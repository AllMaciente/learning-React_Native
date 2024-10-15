import { useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
  Text,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

import { style } from "./styles";
import { colors } from "@/styles/colors";
import { categories } from "@/utils/categories";

import { Categories } from "@/components/categories";
import { Link } from "@/components/link";
import { Option } from "@/components/opition";

export default function Index() {
  const [category, setCategory] = useState(categories[0].name);

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Image source={require("@/assets/logo.png")} style={style.logo} />
        <TouchableOpacity onPress={() => router.navigate("/add")}>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>
      <Categories onChange={setCategory} selected={category} />

      <FlatList
        data={["1", "2", "3", "4", "5"]}
        keyExtractor={(item) => item}
        renderItem={() => (
          <Link
            name="RocketSeat"
            url="https://www.rocketseat.com.br"
            onDetails={() => console.log("Clicou")}
          />
        )}
        style={style.links}
        contentContainerStyle={style.linksContent}
        showsVerticalScrollIndicator={false}
      />

      <Modal transparent visible={false}>
        <View style={style.modal}>
          <View style={style.modalContent}>
            <View style={style.modalHeader}>
              <Text style={style.ModalCategory}>Curso</Text>
              <TouchableOpacity>
                <MaterialIcons
                  name="close"
                  size={20}
                  color={colors.gray[400]}
                />
              </TouchableOpacity>
            </View>
            <Text style={style.modalLinkName}>RockeatSeat</Text>
            <Text style={style.modalUrl}>https://www.rocketseat.com.br</Text>

            <View style={style.modalFooter}>
              <Option name="Excluir" icon="delete" variant="secondary" />
              <Option name="Abrir" icon="language" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
