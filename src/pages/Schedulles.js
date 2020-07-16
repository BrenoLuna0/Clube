import React, { useState, useEffect } from "react";
import { AsyncStorage, ScrollView } from "react-native";
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

export default Schedulles;
