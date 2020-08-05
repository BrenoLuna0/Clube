import React, { useState } from "react";
import { View, KeyboardAvoidingView, Alert, AsyncStorage } from "react-native";
import api from "../services/api";
import styles from "../styles/Password.style";
import TextInput from "../components/TextInput/TextInput";
import DefaultButton from "../components/DefaultButton/DefaultButton";

function About({ navigation }) {
  const [oldPass, setOldPass] = useState("");
  const [oldPassSecureText, setOldPassSecureText] = useState(true);
  const [newPass, setNewPass] = useState("");
  const [newPassSecureText, setNewPassSecureText] = useState(true);
  const [newPassVerify, setNewPassVerify] = useState("");
  const [newPassVerifySecureText, setNewPassVerifySecureText] = useState(true);

  const handleButtonClick = async () => {
    if (newPass != newPassVerify || (newPass === "" && newPassVerify === "")) {
      Alert.alert(
        "Sua senha difere nos campos",
        "Veja se digitou a senha corretamente",
        [
          {
            text: "Ok",
          },
        ]
      );
    } else {
      const token = await AsyncStorage.getItem("token");
      const codigo = await AsyncStorage.getItem("TITU_CODIGO");
      api
        .put(
          `/titular/${codigo}`,
          {
            newPass,
            oldPass,
          },
          {
            headers: { "x-access-token": token },
          }
        )
        .then((response) => {
          if (response.data) {
            Alert.alert(
              "Senha Alterada com Sucesso",
              "Faça login mais uma vez para continuar usando o aplicativo",
              [
                {
                  title: "Ok",
                  onPress: () => navigation.navigate("Login", {}),
                },
              ]
            );
          } else {
            Alert.alert(
              "Erro ao alterar sua senha",
              "Verifique se digitou sua senha corretamente",
              [
                {
                  title: "Ok",
                },
              ]
            );
          }
        });
    }
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : null}
        style={{
          flex: 1,
          alignItems: "center",
        }}
        contentContainerStyle={{ width: "100%" }}
      >
        <View style={styles.containerMaster}>
          <View style={[styles.inputBlock, { marginBottom: 5, marginTop: 50 }]}>
            <TextInput
              value={oldPass}
              secureTextEntry={oldPassSecureText}
              onChangeText={(pass) => setOldPass(pass)}
              label="Senha Antiga"
              changePassEntry={() => {
                setOldPassSecureText(!oldPassSecureText);
              }}
              pass={true}
              autoCapitalize={"none"}
              autoCompleteType={"off"}
              autoCorrect={false}
            />
          </View>
          <View style={[styles.inputBlock, { marginBottom: 5 }]}>
            <TextInput
              value={newPass}
              secureTextEntry={newPassSecureText}
              onChangeText={(pass) => setNewPass(pass)}
              label="Senha Nova"
              changePassEntry={() => {
                setNewPassSecureText(!newPassSecureText);
              }}
              pass={true}
              autoCapitalize={"none"}
              autoCompleteType={"off"}
              autoCorrect={false}
            />
          </View>
          <View style={[styles.inputBlock, { marginBottom: 5 }]}>
            <TextInput
              value={newPassVerify}
              secureTextEntry={newPassVerifySecureText}
              onChangeText={(pass) => setNewPassVerify(pass)}
              label="Digite sua nova senha novamente"
              changePassEntry={() => {
                setNewPassVerifySecureText(!newPassVerifySecureText);
              }}
              pass={true}
              autoCapitalize={"none"}
              autoCompleteType={"off"}
              autoCorrect={false}
            />
          </View>
        </View>
        <View style={styles.button}>
          <DefaultButton
            title="Salvar"
            onPress={() => {
              handleButtonClick();
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </>
  );
}

export default About;
