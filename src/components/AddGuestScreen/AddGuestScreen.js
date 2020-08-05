import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  AsyncStorage,
  Alert,
  ScrollView,
} from "react-native";
import api from "../../services/api";
import DefaultButton from "../DefaultButton/DefaultButton";
import CancelButton from "../CancelButton/CancelButton";
import TextInput from "../TextInput/TextInput";
import styles from "./AddGuestScreen.style";

function Component({ finish, closeModal, loadingScreen, ...props }) {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [tipo, setTipo] = useState("I");

  const addGuest = async () => {
    if (name === "") {
      Alert.alert("Campo de nome é obrigatório", "", [
        {
          text: "Ok",
        },
      ]);
    } else {
      closeModal();
      loadingScreen(true);
      const token = await AsyncStorage.getItem("token");
      api
        .post(
          "/convidado",
          {
            nome: name.toUpperCase(),
            socio: await AsyncStorage.getItem("SOCI_CODIGO"),
            tipo,
            cpf,
          },
          {
            headers: { "x-access-token": token },
          }
        )
        .then(function (response) {
          if (!response.data) {
            closeModal();
            loadingScreen(false);
            Alert.alert(
              "Não foi possível adicionar o convidado no momento. Tente novamente mais tarde",
              "",
              [
                {
                  text: "Ok",
                },
              ]
            );
          } else if (response.data == 1) {
            closeModal();
            loadingScreen(false);
            Alert.alert("Este convidado já está na sua lista", "", [
              {
                text: "Ok",
              },
            ]);
          } else {
            finish();
          }
        })
        .catch(function (err) {
          console.log(err);
          closeModal();
          Alert.alert(
            "Não foi possível adicionar o convidado no momento. Tente novamente mais tarde",
            "",
            [
              {
                text: "Ok",
              },
            ]
          );
        });
    }
  };

  return (
    <Modal {...props}>
      <View style={styles.modalContainer}>
        <ScrollView>
          <View style={styles.inputBlock}>
            <TextInput
              onChangeText={(name) => setName(name)}
              label="Nome do(a) Convidado(a)"
            />
          </View>
          <View style={styles.inputBlock}>
            <TextInput
              keyboardType={"number-pad"}
              type={"custom"}
              options={{
                mask: "999.999.999-99",
              }}
              value={cpf}
              mask="999.999.999-99"
              onChangeText={(text) => {
                setCpf(text);
                if (text == "" || text == null) {
                  setTipo("I");
                } else {
                  setTipo("A");
                }
              }}
              label="CPF"
            />
          </View>
          <View
            style={{
              marginBottom: 15,
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Text
              style={{
                color: "#D91122",
                fontSize: 13,
                fontWeight: "bold",
                paddingHorizontal: 6,
              }}
            >
              Caso o(a) convidado(a) tenha menos de 12 anos, deixar campo CPF em
              branco
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <DefaultButton
              onPress={() => {
                addGuest();
                setCpf("");
              }}
              title={"Cadastrar Convidado(a)"}
            />
          </View>
          <View style={{ marginTop: 20, alignItems: "center" }}>
            <CancelButton onPress={closeModal} title={"Fechar"} />
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}

export default Component;
