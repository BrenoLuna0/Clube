import React, { useState, useEffect, useRef } from "react";
import { View, Alert, StatusBar, ScrollView, Keyboard } from "react-native";
import { onSignIn } from "../services/auth";
import styles from "../styles/Login.style";
import TextInput from "../components/TextInput/TextInput";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import DefaultButton from "../components/DefaultButton/DefaultButton";
import { SliderBox } from "react-native-image-slider-box";

function Login({ navigation }) {
  const [numTitulo, setNumTitulo] = useState("");
  const [senha, setSenha] = useState("");
  const [mask, setMask] = useState("999999999");
  const [modalVisibility, setModalVisibility] = useState(false);
  const [secureText, setSecureText] = useState(true);
  const images = [
    require("../../assets/pic1.png"),
    require("../../assets/pic2.png"),
    require("../../assets/pic3.png"),
    require("../../assets/pic4.png"),
    require("../../assets/pic5.png"),
  ];
  const refScroll = useRef(null);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);

    // cleanup function
    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
    };
  }, []);

  const _keyboardDidShow = () => {
    refScroll.current.scrollToEnd();
  };

  return (
    <ScrollView ref={refScroll} nestedScrollEnabled={true}>
      <StatusBar backgroundColor="#3B3F8C" style={"light"} />

      <View style={styles.containerMaster}>
        <LoadingScreen visible={modalVisibility} transparent={true} />
        <View style={styles.header}>
          <SliderBox
            images={images}
            sliderBoxHeight={350}
            autoplay
            circleLoop
            disableOnPress={true}
          />
        </View>
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
                setSecureText(true);
                console.log(senha);
                senha === "taliberado"
                  ? navigation.navigate("Home", { warningPass: true })
                  : navigation.navigate("Home", {});
                setModalVisibility(false);
                setNumTitulo("");
                setSenha("");
              } else {
                Alert.alert(
                  "Atenção",
                  "Número do Titular/CPF ou Senha inválidos",
                  [
                    {
                      text: "Ok",
                      onPress: setModalVisibility(false),
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
  );
}

export default Login;
