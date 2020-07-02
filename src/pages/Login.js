import React, { useState } from "react";
import { View, Text, Image, Alert, StatusBar, ScrollView } from "react-native";
import { onSignIn } from "../services/auth";
import styles from "../styles/Login.style";
import TextInput from "../components/TextInput/TextInput";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import DefaultButton from "../components/DefaultButton/DefaultButton";

function Login({ navigation }) {
  const [numTitulo, setNumTitulo] = useState("");
  const [senha, setSenha] = useState("");
  const [mask, setMask] = useState("999999999");
  const [modalVisibility, setModalVisibility] = useState(false);
  const [secureText, setSecureText] = useState(true);

  return (
    <>
      <StatusBar backgroundColor="#3B3F8C" style={"light"} />
      <ScrollView>
        <View style={styles.containerMaster}>
          <LoadingScreen visible={modalVisibility} transparent={true} />
          <View style={styles.header}>
            <Image
              style={styles.containerChildImage}
              source={require("../../assets/club_logo.png")}
            />
          </View>
          <View style={[styles.inputBlock, { marginTop: 100 }]}>
            <TextInput
              keyboardType={"number-pad"}
              type={"custom"}
              options={{
                mask,
              }}
              value={numTitulo}
              onChangeText={(text) => {
                if (text.length > 5) {
                  setMask("999.999.999-99");
                } else {
                  setMask("999999999");
                }
                setNumTitulo(text);
              }}
              mask
              label="Número do Titular ou CPF"
            />
          </View>
          <View style={[styles.inputBlock, { marginBottom: 5 }]}>
            <TextInput
              value={senha}
              secureTextEntry={secureText}
              onChangeText={(senha) => setSenha(senha)}
              label="Senha"
              changePassEntry={() => {
                setSecureText(!secureText);
              }}
              pass={true}
              autoCapitalize={"none"}
              autoCompleteType={"off"}
              autoCorrect={false}
            />
          </View>

          <DefaultButton
            onPress={async () => {
              if (numTitulo === "" || senha === "") {
                Alert.alert("Atenção", "Preencha os campos para fazer login", [
                  {
                    text: "Ok",
                  },
                ]);
              } else {
                setModalVisibility(true);
                const result = await onSignIn(numTitulo, senha);
                if (result) {
                  setNumTitulo("");
                  setSenha("");
                  setSecureText(true);
                  navigation.navigate("Home", {});
                  setModalVisibility(false);
                } else {
                  setModalVisibility(false);
                  Alert.alert(
                    "Atenção",
                    "Número do Titular/CPF ou Senha inválidos",
                    [
                      {
                        text: "Ok",
                      },
                    ]
                  );
                }
              }
            }}
            title={"ENTRAR"}
          />
        </View>
      </ScrollView>
    </>
  );
}

export default Login;
