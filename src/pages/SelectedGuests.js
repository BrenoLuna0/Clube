import React, { useState, useEffect } from "react";
import { View, Text, AsyncStorage } from "react-native";
import moment from "moment";
import api from "../services/api";
import styles from "../styles/SelectedGuests.style";
import DefaultButton from "../components/DefaultButton/DefaultButton";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import TableScroll from "../components/TableScroll/TableScroll";
import holiday from "../services/holiday";

function SelectedGuests({ navigation }) {
  const title = "CONVIDADOS";
  const [tableData, setTableData] = useState([]);
  const [tableState, setTableState] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(true);
  const data = new Date(navigation.state.params.data.toString());

  useEffect(() => {
    async function carregarConvidados() {
      const sociCodigo = await AsyncStorage.getItem("SOCI_CODIGO");
      const token = await AsyncStorage.getItem("token");
      await api
        .get(`/convidado/${sociCodigo}/${moment(data).format("YYYY-MM-DD")}`, {
          headers: { "x-access-token": token },
        })
        .then((response) => {
          setTableData(response.data);
          setTableState(response.data.map(() => true));
          setModalVisibility(false);
        });
    }
    carregarConvidados();
  }, []);

  return (
    <>
      <View style={styles.titleBar}>
        <View style={styles.titleBarStyles}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </View>
      <View style={{ flex: 1, alignItems: "center", position: "relative" }}>
        <LoadingScreen visible={modalVisibility} transparent={true} />
        <TableScroll
          tableData={tableData}
          tableState={tableState}
          handleCheckboxClick={() => {}}
          handleDeleteClick={() => {}}
        />
        <View style={styles.bottomButton}>
          <DefaultButton
            onPress={() => {
              data.getDay() == 0 || data.getDay() == 6 || holiday(data)
                ? navigation.navigate("Guests2", {
                    limite: 2,
                    data: moment(data),
                  })
                : navigation.navigate("Guests2", {
                    limite: 4,
                    data: moment(data),
                  });
            }}
            title="Editar"
          />
        </View>
      </View>
    </>
  );
}

export default SelectedGuests;
