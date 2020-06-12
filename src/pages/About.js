import React, { useEffect, useState } from "react";
import { View, Image, Alert, AsyncStorage } from "react-native";
import LineInformation from "../components/LineInformation/LineInformation";
import LogouButton from "../components/LogoutButton/LogoutButton";
import LineDates from "../components/LineDates/LineDates";
import { onSignOut } from "../services/auth";
import api from "../services/api";
import styles from "../styles/AboutStyle.style";

function About({ navigation }) {
  const [name, setName] = useState("");
  const [titulo, setTitulo] = useState("");
  const [dates, setDates] = useState([]);

  useEffect(() => {
    async function loadData() {
      setName(await AsyncStorage.getItem("SOCI_NOME"));
      setTitulo(await AsyncStorage.getItem("TITU_NUME_TITULO"));
    }

    async function loadDates() {
      const token = await AsyncStorage.getItem("token");
      const sociCodigo = await AsyncStorage.getItem("SOCI_CODIGO");
      api
        .get(`agendaConvidado/${sociCodigo}`, {
          headers: {
            "x-access-token": token,
          },
        })
        .then((response) => {
          setDates(response.data);
        })
        .catch((err) => {
          console.log("Err no solicitação");
          alert("Erro ao carregar as datas cadastradas");
        });
    }
    loadDates();
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
      <LineInformation icon="address-book" text={titulo} marginTop={15} />
      <LineDates marginTop={15} dates={dates} />
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
