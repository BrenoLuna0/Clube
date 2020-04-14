import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, Button, Image, StatusBar} from 'react-native';
import { onSignIn } from '../services/auth';
import { TextInputMask } from 'react-native-masked-text';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const IMAGE_HEIGHT = window.width / 2;


function Login({ navigation }) {
    const [numTitulo, setNumTitulo] = useState('');
    const [senha, setSenha] = useState('');

    return (

        <KeyboardAwareScrollView
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle={styles.containerMaster}
            scrollEnabled={false}
        >
            <StatusBar backgroundColor='#3B3F8C' barStyle='light-content'/>
            <View style={styles.header}>
                <View style={styles.containerChild}>
                    <Image
                        style={styles.containerChildImage}
                        source={require('../../assets/club_logo.png')}
                    />
                </View>
            </View>
            <View style={{ marginTop: 100 }}></View>
            <View style={styles.inputBlock}>
                <Text style={styles.text}>
                    Número do Titular
                    </Text>
                <TextInputMask
                    keyboardType={'number-pad'}
                    type={'custom'}
                    options={{
                        mask: '999999999'
                    }}
                    value={numTitulo}
                    onChangeText={text => {
                        setNumTitulo(text)
                    }}
                    style={styles.input}
                />
            </View>
            <View style={styles.inputBlock}>
                <Text style={styles.text}>
                    Senha
                    </Text>
                <TextInput
                    value={senha}
                    secureTextEntry={true}
                    onChangeText={senha => setSenha(senha)}
                    style={styles.input} />
            </View>
            <View style={styles.button}>
                <Button
                    onPress={async () => {
                        const result = await onSignIn(numTitulo, senha);
                        if (result) {
                            setNumTitulo('');
                            setSenha('');
                            navigation.navigate('Home', {});
                        } else {
                            alert('Numero de titular ou senha inválida');
                        }
                    }}
                    title={'Entrar'}
                    color={'#3B3F8C'}
                />
            </View>
            <Text style={styles.link}>
                Esqueceu a senha?
                </Text>

            <View style={styles.register}>
                <Button
                    onPress={() => {
                        navigation.navigate('Register', {});

                    }}
                    title={'Cadastrar'}
                    color={'#3B3F8C'} />
            </View>
            <View style={{ height: 60 }}></View>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    containerMaster: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        height: IMAGE_HEIGHT,
        resizeMode: 'contain',
        marginBottom: 20,
        padding: 10,
        marginTop: 20
    },
    register: {
        marginBottom: 20,
        width: window.width - 100,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        backgroundColor: '#ffae',
    },
    header: {
        backgroundColor: '#3B3F8C',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        height: 200
    },

    containerChild: {
        position: 'absolute',
        backgroundColor: '#F2EFEA',
        justifyContent: 'center',
        borderRadius: 85,
        width: 170,
        height: 170,
        bottom: -85
    },

    containerChildImage: {
        position: 'absolute',
        backgroundColor: '#F2EFEA',
        justifyContent: 'center',
        borderRadius: 85,
        width: 170,
        height: 170,
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
        fontSize: 18
    },

    button: {
        marginTop: 1,
        width: '60%',
        borderRadius: 7
    },

    link: {
        color: '#8c8c8c',
        marginTop: 5
    },

    register: {
        width: '60%',
        marginTop: '10%'
    }
});




export default Login;