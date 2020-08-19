import React, { useState, useEffect } from "react";
import { ScrollView, AsyncStorage, Alert } from "react-native";
import InboxMessage from "../components/InboxMessage/InboxMessage";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import api from "../services/api";

function Inbox({ navigation }) {
  const [readMessages, setReadMessages] = useState([]);
  const [notReadMessages, setNotReadMessages] = useState([]);
  const [modalvisible, setModalVisible] = useState(true);
  const [trigger, setTrigger] = useState(false);

  const readMessage = async (message) => {
    const tituCodigo = await AsyncStorage.getItem("TITU_CODIGO");
    const token = await AsyncStorage.getItem("token");
    api
      .post(
        "lerMensagem",
        {
          msgCodigo: message.MESG_CODIGO,
          tituCodigo,
        },
        {
          headers: {
            "x-access-token": token,
          },
        }
      )
      .then(() => setTrigger(!trigger))
      .catch((err) => {
        console.log(err);
      });
    navigation.navigate("Message", { message });
  };

  useEffect(() => {
    const loadMessages = async () => {
      setModalVisible(true);
      const tituCodigo = await AsyncStorage.getItem("TITU_CODIGO");
      const token = await AsyncStorage.getItem("token");
      await api
        .get(`/mensagemNaoLida/${tituCodigo}`, {
          headers: {
            "x-access-token": token,
          },
        })
        .then((response) => {
          setNotReadMessages(response.data);
        })
        .catch((err) => {
          console.log(err);
          Alert.alert(
            "ERRO",
            "Erro ao carregar mensagens, tente novamente mais tarde",
            [
              {
                text: "Ok",
                onPress: () => navigation.goBack(),
              },
            ]
          );
        });

      await api
        .get(`/mensagemLida/${tituCodigo}`, {
          headers: {
            "x-access-token": token,
          },
        })
        .then((response) => {
          setReadMessages(response.data);
        })
        .catch((err) => {
          console.log(err);
          Alert.alert(
            "ERRO",
            "Erro ao carregar mensagens, tente novamente mais tarde",
            [
              {
                text: "Ok",
                onPress: () => navigation.goBack(),
              },
            ]
          );
        });

      setModalVisible(false);
    };

    loadMessages();
  }, [trigger]);

  return (
    <>
      <LoadingScreen visible={modalvisible} transparent={true} />
      <ScrollView>
        {notReadMessages.map((message) => {
          return (
            <InboxMessage
              key={message.MESG_CODIGO}
              unread={true}
              title={message.MESG_TITULO}
              body={message.MESG_DESCRICAO}
              onPress={() => readMessage(message)}
            />
          );
        })}
        {readMessages.map((message) => {
          return (
            <InboxMessage
              key={message.MESG_CODIGO}
              unread={false}
              title={message.MESG_TITULO}
              body={message.MESG_DESCRICAO}
              onPress={() => navigation.navigate("Message", { message })}
            />
          );
        })}
      </ScrollView>
    </>
  );
}

export default Inbox;
