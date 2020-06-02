import React, { useState, useEffect } from "react";
import Carousel from "react-native-snap-carousel";
import LinearGradient from "react-native-linear-gradient";
import SliderEntry from "../components/SliderEntry/SliderEntry";
import styles, { colors } from "../styles/index.style";
import stylesLocal from "../styles/Home.style";
import {
  sliderWidth,
  itemWidth,
} from "../components/SliderEntry/SliderEntry.style";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
  BackHandler,
  Alert,
} from "react-native";
import { ENTRIES1 } from "../static/entries";
import { isSignedIn, onSignOut } from "../services/auth";
import { getCurrentRoute } from "../services/navigation";

function Home({ navigation }) {
  const SLIDER_1_FIRST_ITEM = 1;

  const [slider1ActiveSlide, setSlider1ActiveSlide] = useState(
    SLIDER_1_FIRST_ITEM
  );
  const [usuario, setUsuario] = useState([]);

  const backAction = () => {
    const isHome = getCurrentRoute() === "Home";
    if (isHome) {
      Alert.alert("Aviso!", "Deseja voltar para a tela de Login?", [
        {
          text: "Cancelar",
          onPress: () => null,
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => {
            onSignOut();
            navigation.navigate("Login", {});
          },
        },
      ]);

      return true;
    } else {
      return false;
    }
  };

  function _renderItemWithParallax({ item, index }, parallaxProps) {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );
  }

  function mainExample(number, title) {
    return (
      <View style={styles.exampleContainer}>
        <Carousel
          //ref={c => _slider1Ref = c}
          data={ENTRIES1}
          renderItem={_renderItemWithParallax}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages={true}
          firstItem={SLIDER_1_FIRST_ITEM}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          // inactiveSlideShift={20}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          loop={true}
          loopClonesPerSide={2}
          autoplay={true}
          autoplayDelay={500}
          autoplayInterval={5000}
          onSnapToItem={(index) =>
            setSlider1ActiveSlide({ slider1ActiveSlide: index })
          }
        />
      </View>
    );
  }

  function gradient() {
    return (
      <LinearGradient
        colors={[colors.background1, colors.background2]}
        startPoint={{ x: 1, y: 0 }}
        endPoint={{ x: 0, y: 1 }}
        style={styles.gradient}
      />
    );
  }

  async function getNome() {
    if (await isSignedIn()) {
      setUsuario(await (await AsyncStorage.getItem("SOCI_NOME")).split(" "));
    } else {
      navigation.navigate("Login", {});
    }
  }

  const example1 = mainExample(
    1,
    "Default layout | Loop | Autoplay | Parallax | Scale | Opacity | Pagination with tappable dots"
  );

  React.useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);
    getNome();
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <ScrollView
            style={styles.scrollview}
            scrollEventThrottle={200}
            directionalLockEnabled={true}
          >
            {example1}
          </ScrollView>
        </View>
      </SafeAreaView>
      <View style={stylesLocal.welcomeBar}>
        <View style={stylesLocal.welcomebarStyle}>
          <Text style={stylesLocal.text}>
            BEM VINDO {usuario[0] + " " + usuario[usuario.length - 1]}
          </Text>
        </View>
      </View>
      <View style={stylesLocal.content}>
        <View style={stylesLocal.actionMenuButtons}>
          <View style={stylesLocal.buttonTopLeft}>
            <TouchableOpacity
              style={stylesLocal.button}
              //onPress={}
            >
              <Text style={stylesLocal.buttonText}> Adicionar Dependente </Text>
            </TouchableOpacity>
          </View>
          <View style={stylesLocal.buttonTopRight}>
            <TouchableOpacity
              style={stylesLocal.button}
              onPress={() => {
                navigation.navigate("DatePicker", {});
              }}
            >
              <Text style={stylesLocal.buttonText}> Adicionar Convidados </Text>
            </TouchableOpacity>
          </View>
          <View style={stylesLocal.buttonBottomLeft}>
            <TouchableOpacity
              style={stylesLocal.button}
              onPress={() => {
                navigation.navigate("Activities", {});
              }}
            >
              <Text style={stylesLocal.buttonText}> Grade de Horário </Text>
            </TouchableOpacity>
          </View>
          <View style={stylesLocal.buttonBottomRight}>
            <TouchableOpacity
              style={stylesLocal.button}
              //onPress={}
            >
              <Text style={stylesLocal.buttonText}> Sobre </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

export default Home;
