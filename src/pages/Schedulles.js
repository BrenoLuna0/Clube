import React, { useState, useEffect } from "react";
import { AsyncStorage, ScrollView, Text, View } from "react-native";
import api from "../services/api";
import DateCard from "../components/DateCard/DateCard";
import LoadScreen from "../components/LoadingScreen/LoadingScreen";

function Schedulles({ navigation }) {
  const [dates, setDates] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const loadDates = async () => {
      setModalVisible(true);
      const sociCodigo = await AsyncStorage.getItem("SOCI_CODIGO");
      const token = await AsyncStorage.getItem("token");
      await api
        .get(`/agenda/${sociCodigo}`, {
          headers: {
            "x-access-token": token,
          },
        })
        .then((response) => {
          setDates(response.data);
          setModalVisible(false);
        })
        .catch((err) => {
          console.log(err);
          alert("Erro ao carregar as datas");
        });
    };
    loadDates();
  }, []);

  if (dates.length === 0) {
    return (
      <>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ color: "#8a8a8a" }}>
            Você não possui nenhuma visita agendada
          </Text>
        </View>
        <LoadScreen visible={modalVisible} transparent={true} />
      </>
    );
  } else {
    return (
      <>
        <ScrollView>
          {dates.map((date, index) => {
            return <DateCard navigation={navigation} data={date} key={index} />;
          })}
        </ScrollView>
        <LoadScreen visible={modalVisible} transparent={true} />
      </>
    );
  }
}

export default Schedulles;
