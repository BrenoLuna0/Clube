import React, { useState, useEffect, useRef } from "react";
import Carousel from "react-native-snap-carousel";
import SliderEntry from "../components/SliderEntry/SliderEntry";
import styles from "../styles/index.style";
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
  Animated,
} from "react-native";
import { ENTRIES1 } from "../static/entries";
import { isSignedIn, onSignOut } from "../services/auth";
import { getCurrentRoute } from "../services/navigation";
import Icon from "react-native-vector-icons/FontAwesome";

function Home({ navigation }) {
  const slideAnim = useRef(new Animated.Value(-400)).current;
  const bottonButtonAnim = useRef(new Animated.Value(-400)).current;

  const SLIDER_1_FIRST_ITEM = 1;

  const [slider1ActiveSlide, setSlider1ActiveSlide] = useState(
    SLIDER_1_FIRST_ITEM
  );
  const [usuario, setUsuario] = useState(["", ""]);

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

  useEffect(() => {
    if (navigation.state.params.warningPass === true) {
      Alert.alert(
        "AVISO",
        "É recomendado que atualize a sua senha para garantir maior segurança",
        [
          {
            text: "Ok",
            onPress: () => navigation.navigate("About", {}),
          },
        ]
      );
    }
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 2500,
    }).start();

    Animated.timing(bottonButtonAnim, {
      toValue: 5,
      duration: 2500,
    }).start();

    BackHandler.addEventListener("hardwareBackPress", backAction);
    getNome();
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  return (
    <>
      <SafeAreaView style={[styles.safeArea, { marginTop: 0 }]}>
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
            BEM VINDO(A) {usuario[0] + " " + usuario[usuario.length - 1]}
          </Text>
        </View>
      </View>
      <View style={stylesLocal.content}>
        <View style={stylesLocal.actionMenuButtons}>
          <Animated.View
            style={[stylesLocal.buttonTopLeft, { left: slideAnim }]}
          >
            <TouchableOpacity
              style={stylesLocal.button}
              onPress={() => {
                Alert.alert(
                  "Alerta",
                  "Ainda não temos essa funcionalidade no momento. Espere por novas Atualizações",
                  [
                    {
                      text: "Ok",
                    },
                  ]
                );
              }}
            >
              <Icon name="users" color="#F3F3F3" size={36} />
              <Text style={stylesLocal.buttonText}> Dependentes </Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            style={[stylesLocal.buttonTopRight, { right: slideAnim }]}
          >
            <TouchableOpacity
              style={stylesLocal.button}
              onPress={() => {
                navigation.navigate("DatePicker", {});
              }}
            >
              <Icon name="calendar" color="#F3F3F3" size={36} />
              <Text style={stylesLocal.buttonText}> Agendar Visita </Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            style={[stylesLocal.buttonBottomLeft, { left: slideAnim }]}
          >
            <TouchableOpacity
              style={stylesLocal.button}
              onPress={() => {
                //navigation.navigate("Activities", {});
                Alert.alert(
                  "Alerta",
                  "Ainda não temos essa funcionalidade no momento. Espere por novas Atualizações",
                  [
                    {
                      text: "Ok",
                    },
                  ]
                );
              }}
            >
              <Icon name={"clock-o"} color="#F3F3F3" size={36} />
              <Text style={stylesLocal.buttonText}> Horário </Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            style={[stylesLocal.buttonBottomRight, { right: slideAnim }]}
          >
            <TouchableOpacity
              style={stylesLocal.button}
              onPress={() => {
                navigation.navigate("Schedulles", {});
              }}
            >
              <Icon name={"check-square-o"} color="#F3F3F3" size={36} />
              <Text style={stylesLocal.buttonText}> Visitas Agendadas </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
        <Animated.View
          style={[stylesLocal.lineButton, { bottom: bottonButtonAnim }]}
        >
          <TouchableOpacity
            style={stylesLocal.lineButtonInside}
            onPress={() => {
              navigation.navigate("About", {});
            }}
          >
            <Icon name={"gear"} color="#F3F3F3" size={36} />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </>
  );
}

export default Home;
