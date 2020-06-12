import React, { useEffect, useState } from "react";
import { View, Image, Alert, AsyncStorage } from "react-native";
import LineInformation from "../components/LineInformation/LineInformation";
import LogouButton from "../components/LogoutButton/LogoutButton";
import { onSignOut } from "../services/auth";
import styles from "../styles/AboutStyle.style";

function About({ navigation }) {
  const [name, setName] = useState("");
  const [titulo, setTitulo] = useState("");

  useEffect(() => {
    async function loadData() {
      setName(await AsyncStorage.getItem("SOCI_NOME"));
      setTitulo(await AsyncStorage.getItem("TITU_NUME_TITULO"));
    }
    loadData();
  }, []);

  return (
    <View style={styles.containerMaster}>
      <View style={styles.header}>
        <Image
          style={styles.containerChildImage}
          source={require("../../assets/club_logo.png")}
        />
      </View>
      <LineInformation icon="user" text={name} marginTop={85} />
      <LineInformation icon="address-book" text={titulo} marginTop={10} />
      <LogouButton
        onPress={() => {
          Alert.alert("Aviso!", "Deseja voltar para a tela de Login?", [
            {
              text: "Cancelar",
              onPress: () => null,
              style: "cancel",
            },
            {
              text: "Sim",
              onPress: () => {
                onSignOut();
                navigation.navigate("Login", {});
              },
            },
          ]);
        }}
      />
    </View>
  );
}

export default About;
