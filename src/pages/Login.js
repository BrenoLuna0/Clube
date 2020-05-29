import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  StatusBar,
  Modal,
  ActivityIndicator,
} from "react-native";
import { onSignIn } from "../services/auth";
import { TextInputMask } from "react-native-masked-text";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "../styles/Login.style";
import TextInput from "../components/TextInput";

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
      <Modal
        visible={modalVisibility}
        transparent={true}
        onRequestClose={() => {
          setModalVisibility(false);
        }}
      >
        <View style={styles.modalContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      </Modal>
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
        <Text style={styles.text}>Número do Titular ou CPF</Text>
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
        />
      </View>
      <View style={styles.inputBlock}>
        <Text style={styles.text}>Senha</Text>
        <TextInput
          value={senha}
          secureTextEntry={true}
          onChangeText={(senha) => setSenha(senha)}
        />
      </View>
      <View style={styles.button}>
        <Button
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
          title={"Entrar"}
          color={"#3B3F8C"}
        />
      </View>
      <Text style={styles.link}>Esqueceu a senha?</Text>

      <View style={styles.register}>
        <Button
          onPress={() => {
            navigation.navigate("Register", {});
          }}
          title={"Cadastrar"}
          color={"#3B3F8C"}
        />
      </View>
      <View style={{ height: 60 }}></View>
    </KeyboardAwareScrollView>
  );
}

export default Login;
