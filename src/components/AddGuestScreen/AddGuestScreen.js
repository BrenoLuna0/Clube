import React, { useState } from "react";
import { Modal, View, Text, AsyncStorage } from "react-native";
import { TextInputMask } from "react-native-masked-text";
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
      alert("Campo de nome é obrigatório");
    } else {
      closeModal();
      loadingScreen();
      const token = await AsyncStorage.getItem("token");
      const codigo = await api
        .get("/gerarIdConvidado", {
          headers: { "x-access-token": token },
        })
        .then(function (response) {
          return response.data;
        });
      api
        .post(
          "/convidado",
          {
            codigo: codigo[0],
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
            alert(
              "Não foi possível adicionar o convidado no momento. Tente novamente mais tarde"
            );
          } else {
            finish();
          }
        })
        .catch(function (err) {
          console.log(err);
          alert(
            "Não foi possível adicionar o convidado no momento. Tente novamente mais tarde"
          );
        });
    }
  };

  return (
    <Modal {...props}>
      <View style={styles.modalContainer}>
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
      </View>
    </Modal>
  );
}

export default Component;
