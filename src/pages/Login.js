import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, Button, Linking, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { onSignIn } from '../services/auth';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import api from '../services/api';

function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <>
            <View style={styles.header}>
                <View style={styles.containerChild}>
                    <Image
                        style={styles.containerChildImage}
                        source={require('../../assets/club_logo.png')}
                    />
                </View>
            </View>
            <View style={styles.login}>
                <View style={styles.inputBlock}>
                    <Text style={styles.text}>
                        Número do Titular
                    </Text>
                    <TextInput
                        keyboardType={'email-address'}
                        onChangeText={email => setEmail(email)}
                        style={styles.input} />
                </View>
                <View style={styles.inputBlock}>
                    <Text style={styles.text}>
                        Senha
                    </Text>
                    <TextInput
                        secureTextEntry={false}
                        onChangeText={senha => setSenha(senha)}
                        style={styles.input} />
                </View>
                <View style={styles.button}>
                    <Button
                        onPress={async () => {
                            api.post('/usuario', {
                                codigo: email,
                                senha: senha
                            }).then(function (response) {
                                if (response.data) {
                                    navigation.navigate('Home', {});
                                }else{
                                    alert('Numero de titular ou senha inválida');
                                }
                            }).catch(function (err) {
                                console.log(err);
                            });
                            //onSignIn(email, senha).then(() => navigation.navigate('Home', {})).catch((err) => { console.log('ERROOOOO') });
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
                            onSignIn(email, senha).then((usuario) => navigation.navigate('Register', { usuario }).catch((err) => { console.log('ERROOOOO') }));

                        }}
                        title={'Cadastrar'}
                        color={'#3B3F8C'} />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
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

    login: {
        alignItems: 'center',
        position: 'relative',
        flex: 1,
        marginTop: 100
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