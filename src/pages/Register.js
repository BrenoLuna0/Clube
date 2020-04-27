import React, { useState } from 'react';
import { View, TextInput, Text, Button, ScrollView} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from '../styles/Register.style';

function Register() {
    const [numTitulo, setNumTitulo] = useState('');
    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');
    const [celular, setCelular] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    return (
        <ScrollView>
            <KeyboardAwareScrollView
                resetScrollToCoords={{ x: 0, y: 0 }}
                contentContainerStyle={styles.container}
                scrollEnabled={false}
            >
                <View style={styles.header}>
                    <View style={styles.containerChild}>

                    </View>
                </View>
                <View style={styles.registration}>
                    <View style={styles.inputBlock}>
                        <Text style={styles.text}>
                            Número do Título
                    </Text>
                        <TextInputMask
                            keyboardType={'number-pad'}
                            type={'custom'}
                            options={{
                                mask: '9999'
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
                            CPF
                    </Text>
                        <TextInputMask
                            type={'cpf'}
                            value={cpf}
                            onChangeText={text => {
                                setCpf(text);
                            }}
                            style={styles.input}
                        />

                    </View>
                    <View style={styles.inputBlock}>
                        <Text style={styles.text}>
                            Nome
                    </Text>
                        <TextInput
                            value={nome}
                            onChangeText={nome => setNome(nome)}
                            style={styles.input} />
                    </View>
                    <View style={styles.inputBlock}>
                        <Text style={styles.text}>
                            Celular
                    </Text>
                        <TextInputMask
                            type={'cel-phone'}
                            options={{
                                maskType: 'BRL',
                                withDDD: true,
                                dddMask: '(99) '
                            }}
                            value={celular}
                            onChangeText={text => {
                                setCelular(text);
                            }}
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.inputBlock}>
                        <Text style={styles.text}>
                            Email
                    </Text>
                        <TextInput
                            keyboardType={'email-address'}
                            value={email}
                            onChangeText={email => setEmail(email)}
                            style={styles.input} />
                    </View>
                    <View style={styles.inputBlock}>
                        <Text style={styles.text}>
                            Senha
                        </Text>
                        <TextInput
                            secureTextEntry={true}
                            value={senha}
                            onChangeText={senha => setSenha(senha)}
                            style={styles.input} />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title={'Cadastrar'}
                            color={'#3B3F8C'}
                        />
                    </View>
                    <View style={{ height: 30 }}></View>
                </View>
            </KeyboardAwareScrollView>
        </ScrollView>
    )
}




export default Register;