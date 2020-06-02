import React, { useState } from "react";
import { View, Text, Image, StatusBar } from "react-native";
import { onSignIn } from "../services/auth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "../styles/Login.style";
import TextInput from "../components/TextInput/TextInput";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import DefaultButton from "../components/DefaultButton/DefaultButton";

function Login({ navigation }) {
  const [numTitulo, setNumTitulo] = useState("");
  const [senha, setSenha] = useState("");
  const [mask, setMask] = useState("999.999.999-99");
  const [modalVisibility, setModalVisibility] = useState(false);

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.containerMaster}
      scrollEnabled={false}
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
    </KeyboardAwareScrollView>
  );
}

export default Login;
