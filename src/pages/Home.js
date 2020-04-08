import React, { useState, useEffect } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import SliderEntry from '../components/SliderEntry';
import styles, { colors } from '../styles/index.style';
import { sliderWidth, itemWidth } from '../styles/SliderEntry.style';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, Button, TouchableOpacity, AsyncStorage, BackHandler, Alert } from 'react-native';
import { ENTRIES1 } from '../static/entries';
import { isSignedIn, onSignOut } from '../services/auth'
import { getCurrentRoute } from '../services/navigation'


function Home({ navigation }) {

    const SLIDER_1_FIRST_ITEM = 1;

    const [slider1ActiveSlide, setSlider1ActiveSlide] = useState(SLIDER_1_FIRST_ITEM);
    const [usuario, setUsuario] = useState('');

    const backAction = () => {
        const isHome = getCurrentRoute() === 'Home'
        if (isHome) {
            Alert.alert('Aviso!', 'Deseja sair do aplicativo?', [
                {
                    text: "Cancelar",
                    onPress: () => null,
                    style: 'cancel'
                },
                {
                    text: "Sim",
                    onPress: () => {
                        onSignOut();
                        navigation.navigate('Login', {});
                    }
                }
            ]);

            return true;
        }else {
            return false;
        }
    }


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
                    onSnapToItem={(index) => setSlider1ActiveSlide({ slider1ActiveSlide: index })}
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
            setUsuario(await AsyncStorage.getItem('usuario'));
        } else {
            navigation.navigate('Login', {});
        }
    }

    const example1 = mainExample(1, 'Default layout | Loop | Autoplay | Parallax | Scale | Opacity | Pagination with tappable dots');
    
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
                    {gradient}
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
                <Text style={stylesLocal.text}>
                    Bem vindo {usuario}
                </Text>
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
                                navigation.navigate('DatePicker', {});
                            }}
                        >
                            <Text style={stylesLocal.buttonText}> Adicionar Convidados </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={stylesLocal.buttonBottomLeft}>
                        <TouchableOpacity
                            style={stylesLocal.button}
                            onPress={() => {
                                navigation.navigate('Activities', {});
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

const stylesLocal = StyleSheet.create({
    header: {
        backgroundColor: '#8c8c8c',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        height: 200
    },

    containerChild: {
        position: 'absolute',
        backgroundColor: '#666666',
        justifyContent: 'center',
        borderRadius: 85,
        width: 170,
        height: 170,
        bottom: -85
    },

    content: {
        flex: 1,
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        alignContent: 'center',
        justifyContent: 'center'
    },

    input: {
        height: 34,
        marginBottom: 10,
        fontSize: 18,
        borderStyle: 'solid',
        borderColor: '#8c8c8c',
        borderWidth: 1,
        borderRadius: 7,
    },

    inputBlock: {
        width: '80%',
    },

    text: {
        fontSize: 18,
        color: '#F2EFEA'
    },

    button: {
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#3B3F8C',
        padding: 10
    },

    link: {
        color: '#8c8c8c',
        marginTop: 5
    },

    register: {
        position: 'absolute',
        bottom: '25%',
        width: '60%',
    },
    welcomeBar: {
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: '#D91122',
        height: 50,
        width: '100%',
    },

    actionMenuButtons: {
        position: 'relative',
        width: '75%',
        height: '55%'
    },

    buttonTopLeft: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3B3F8C',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '48%',
        height: '48%',
    },

    buttonTopRight: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3B3F8C',
        position: 'absolute',
        top: 0,
        right: 0,
        width: '48%',
        height: '48%',
    },

    buttonBottomLeft: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3B3F8C',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '48%',
        height: '48%',
    },

    buttonBottomRight: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3B3F8C',
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '48%',
        height: '48%',
    },

    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    }
});





export default Home;