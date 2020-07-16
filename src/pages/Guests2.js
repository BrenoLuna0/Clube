import React, { useState, useEffect } from "react";
import { View, Text, AsyncStorage, Alert } from "react-native";
import moment from "moment";
import api from "../services/api";
import styles from "../styles/Guests.style";
import DefaultButton from "../components/DefaultButton/DefaultButton";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import AddGuestScreen from "../components/AddGuestScreen/AddGuestScreen";
import TableScroll from "../components/TableScroll/TableScroll";
import PlusButton from "../components/PlusButton/PlusButton";

function Guests({ navigation }) {
  const [title, setTitle] = useState(
    'Marque os convidados da sua lista de amigos que deseja chamar. Para Adicionar novos convidados na lista utilize o botão "+"'
  );
  const [tableData, setTableData] = useState([]);
  const [tableState, setTableState] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibility, setModalVisibility] = useState(true);
  const [modalSaveVisibility, setModalSaveVisibility] = useState(false);
  const [data, setData] = useState(
    new Date(navigation.state.params.data.toString())
  );
  const [limit, setLimit] = useState(navigation.state.params.limite);
  const [selectedBoxes, setSelectedBoxes] = useState(0);
  const [update, setUpdate] = useState(false);
  const [agenCodigo, setAgenCodigo] = useState(0);

  const dias = [
    "DOMINGO",
    "SEGUNDA-FEIRA",
    "TERÇA-FEIRA",
    "QUARTA-FEIRA",
    "QUINTA-FEIRA",
    "SEXTA-FEIRA",
    "SABADO",
  ];

  useEffect(() => {
    async function carregarConvidados() {
      const sociCodigo = await AsyncStorage.getItem("SOCI_CODIGO");
      const token = await AsyncStorage.getItem("token");
      const convidados = await api
        .get(`/convidado/${sociCodigo}/${moment(data).format("YYYY-MM-DD")}`, {
          headers: { "x-access-token": token },
        })
        .then((response) => {
          return response.data;
        });

      setSelectedBoxes(convidados.length);
      api
        .get(`/convidado/${sociCodigo}`, {
          headers: { "x-access-token": token },
        })
        .then(function (response) {
          setTableData(response.data);
          if (convidados.length > 0) {
            setUpdate(true);
            setAgenCodigo(convidados[0].AGEN_CODIGO);
            setTableState(
              response.data.map((conv) => {
                const verif = convidados.filter(
                  (convidado) =>
                    convidado.CONV_TITU_CODIGO == conv.CONV_TITU_CODIGO
                );
                if (verif.length === 0) {
                  return false;
                }
                return true;
              })
            );
          } else {
            setTableState(response.data.map(() => false));
          }

          setModalVisibility(false);
        })
        .catch(function (err) {
          console.log(err);
        });
    }
    carregarConvidados();
  }, []);

  const carregarConvidados = async () => {
    const sociCodigo = await AsyncStorage.getItem("SOCI_CODIGO");
    const token = await AsyncStorage.getItem("token");
    const convidados = await api
      .get(`/convidado/${sociCodigo}/${moment(data).format("YYYY-MM-DD")}`, {
        headers: { "x-access-token": token },
      })
      .then((response) => {
        return response.data;
      });

    setSelectedBoxes(convidados.length);
    api
      .get(`/convidado/${sociCodigo}`, {
        headers: { "x-access-token": token },
      })
      .then(function (response) {
        setTableData(response.data);
        if (convidados.length > 0) {
          setUpdate(true);
          setAgenCodigo(convidados[0].AGEN_CODIGO);
          setTableState(
            response.data.map((conv) => {
              const verif = convidados.filter(
                (convidado) =>
                  convidado.CONV_TITU_CODIGO == conv.CONV_TITU_CODIGO
              );
              if (verif.length === 0) {
                return false;
              }
              return true;
            })
          );
        } else {
          setTableState(response.data.map(() => false));
        }

        setModalVisibility(false);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const handleCheckboxClick = (checkBox) => {
    setTableState((state) =>
      state.map((item, index) => {
        if (checkBox == index) {
          if (item == false) {
            if (selectedBoxes < limit) {
              setSelectedBoxes(selectedBoxes + 1);
              return !item;
            } else {
              Alert.alert(
                "Número Máximo de convidados atingido",
                `O limite de convidados para o dia que você escolheu é de ${limit} pessoas`,
                [
                  {
                    text: "Ok",
                  },
                ]
              );
              return item;
            }
          } else {
            setSelectedBoxes(selectedBoxes - 1);
            return !item;
          }
        } else {
          return item;
        }
      })
    );
  };

  const inserirAgenda = async () => {
    if (selectedBoxes == 0 || selectedBoxes == null) {
      Alert.alert("Selecione as pessoas que deseja convidar para o Clube", "", [
        {
          text: "Ok",
        },
      ]);
    } else {
      setModalSaveVisibility(!modalSaveVisibility);
      const token = await AsyncStorage.getItem("token");
      api
        .post(
          "/agenda",
          {
            data: moment(data).format("MM/DD/YYYY"),
            diaSemana: dias[data.getDay()],
            qtdConvidado: selectedBoxes,
            dataIncl: moment().format("MM/DD/YYYY"),
          },
          {
            headers: { "x-access-token": token },
          }
        )
        .then((response) => {
          if (response.data) {
            inserirConvidadosAgenda(response.data[0].AGEN_CODIGO);
            //alert('Data agendada');
            //setModalSaveVisibility(false);
          }
        })
        .catch((err) => {
          console.log(err);
          Alert.alert(
            "Houve um erro ao convidar os seus amigos, tente novamente mais tarde",
            "",
            [
              {
                text: "Ok",
              },
            ]
          );
          setModalSaveVisibility(false);
        });
    }
  };

  const inserirConvidadosAgenda = async (agenCodigo) => {
    const sociCodigo = await AsyncStorage.getItem("SOCI_CODIGO");
    const convidados = tableData.filter((convidado, index) => {
      if (tableState[index]) {
        return convidado;
      }
    });
    const token = await AsyncStorage.getItem("token");
    api
      .post(
        "/agendaConvidado",
        {
          agenCodigo,
          convidados,
          socio: sociCodigo,
          observacao: "",
          dataIncl: moment().format("MM/DD/YYYY"),
        },
        {
          headers: { "x-access-token": token },
        }
      )
      .then((response) => {
        if (response.data) {
          Alert.alert(
            "Data Agendada",
            "Estamos esperando você e seus convidados neste dia!",
            [
              {
                text: "Ok",
                onPress: () => {
                  setModalSaveVisibility(false);
                  navigation.navigate("Home", {});
                },
              },
            ],

            { cancelable: false }
          );
        }
      })
      .catch((err) => {
        console.log(err);
        Alert.alert(
          "Houve um erro ao convidar os seus amigos, tente novamente mais tarde",
          "",
          [
            {
              text: "Ok",
            },
          ]
        );
        setModalSaveVisibility(false);
      });
  };

  const atualizarAgenda = async () => {
    if (selectedBoxes == 0 || selectedBoxes == null) {
      Alert.alert("Selecione as pessoas que deseja convidar para o Clube", "", [
        {
          text: "Ok",
        },
      ]);
    } else {
      setModalSaveVisibility(!modalSaveVisibility);
      const convidados = tableData.filter((convidado, index) => {
        if (tableState[index]) {
          return convidado;
        }
      });
      const sociCodigo = await AsyncStorage.getItem("SOCI_CODIGO");
      const token = await AsyncStorage.getItem("token");
      api
        .put(
          `/agenda/${agenCodigo}`,
          {
            convidados,
            sociCodigo,
          },
          {
            headers: { "x-access-token": token },
          }
        )
        .then((response) => {
          if (response.data) {
            Alert.alert(
              "Agendamento atualizado",
              "Estamos esperando você e seus convidados neste dia!",
              [
                {
                  text: "Ok",
                  onPress: () => {
                    navigation.navigate("Home", {});
                  },
                },
              ],
              { cancelable: false }
            );
            setModalSaveVisibility(false);
          }
        })
        .catch((err) => {
          console.log(err);
          Alert.alert(
            "Houve um erro ao convidar os seus amigos, tente novamente mais tarde",
            "",
            [
              {
                text: "Ok",
              },
            ]
          );
          setModalSaveVisibility(false);
        });
    }
  };

  return (
    <>
      <View style={styles.titleBar}>
        <View style={styles.titleBarStyles}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </View>
      <View style={{ flex: 1, alignItems: "center", position: "relative" }}>
        <AddGuestScreen
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          finish={() => {
            carregarConvidados();
            setTitle(
              'Marque os convidados da sua lista de amigos que deseja chamar. Para Adicionar novos convidados na lista utilize o botão "+"'
            );
            setModalVisible(!modalVisible);
          }}
          closeModal={() => {
            setTitle(
              'Marque os convidados da sua lista de amigos que deseja chamar. Para Adicionar novos convidados na lista utilize o botão "+"'
            );
            setModalVisible(!modalVisible);
          }}
          loadingScreen={(value) => {
            setModalVisibility(value);
          }}
        />
        <PlusButton
          onPress={() => {
            setModalVisible(!modalVisible);
            setTitle("Adicione um amigo na sua lista");
          }}
        />
        <TableScroll
          tableData={tableData}
          tableState={tableState}
          handleCheckboxClick={handleCheckboxClick}
        />
        <View style={styles.bottomButton}>
          <DefaultButton
            onPress={() => {
              update ? atualizarAgenda() : inserirAgenda();
            }}
            title="Salvar"
          />
        </View>
      </View>
      <LoadingScreen visible={modalVisibility} transparent={true} />
      <LoadingScreen visible={modalSaveVisibility} transparent={true} />
    </>
  );
}

export default Guests;
