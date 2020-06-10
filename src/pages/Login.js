import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
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

  return (
    <KeyboardAvoidingView
      //resetScrollToCoords={{ x: 0, y: 0 }}
      //contentContainerStyle={styles.containerMaster}
      //scrollEnabled={false}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.containerMaster}
    >
      <StatusBar backgroundColor="#3B3F8C" barStyle="light-content" />
      <LoadingScreen visible={modalVisibility} transparent={true} />
      <View style={styles.header}>
        <View style={styles.containerChild}>
          <Image
            style={styles.containerChildImage}
            source={require("../../assets/club_logo.png")}
          />
        </View>
      </View>
      <View style={{ marginTop: 100 }}></View>
      <View style={styles.inputBlock}>
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
      <View style={styles.inputBlock}>
        <TextInput
          value={senha}
          secureTextEntry={true}
          onChangeText={(senha) => setSenha(senha)}
          label="Senha"
        />
      </View>
      <View style={{ height: 5 }}></View>
      <DefaultButton
        onPress={async () => {
          setModalVisibility(true);
          const result = await onSignIn(numTitulo, senha);
          if (result) {
            setNumTitulo("");
            setSenha("");
            navigation.navigate("Home", {});
            setModalVisibility(false);
          } else {
            setModalVisibility(false);
            alert("Numero de titular ou senha inválida");
          }
        }}
        title={"ENTRAR"}
      />
      <Text style={styles.link}>Esqueceu a senha?</Text>

      <View style={styles.register}></View>
      <DefaultButton
        onPress={() => {
          navigation.navigate("Register", {});
        }}
        title={"CADASTRAR"}
      />
      <View style={{ height: 60 }}></View>
    </KeyboardAvoidingView>
  );
}

export default Login;
