import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, Dimensions, ScrollView, TouchableOpacity, Modal, Button, AsyncStorage, ActivityIndicator } from 'react-native'
import { TextInputMask } from 'react-native-masked-text';
import { Table, Row } from 'react-native-table-component';
import { CheckBox } from 'react-native-elements'
import api from '../services/api';
import styles from '../styles/Guests.style';

function Guests({ navigation }) {
    const [title, setTitle] = useState('Adicione seus Convidados na Lista');
    const [tableData, setTableData] = useState([]);
    const [tableState, setTableState] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibility, setModalVisibility] = useState(true);
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [tipo, setTipo] = useState('I');

    useEffect(() => {
        async function carregarConvidados() {
            const sociCodigo = await AsyncStorage.getItem('SOCI_CODIGO');
            api.get(`/convidado/${sociCodigo}`)
                .then(function (response) {
                    setTableData(response.data);
                    setTableState(response.data.map(()=>false));
                    setModalVisibility(false)

                    console.log(tableState);

                })
                .catch(function (err) {
                    console.log(err);
                })
        }

        carregarConvidados();
    }, []);

    const addGuest = async () => {
        if (name === '') {
            alert('Campo de nome é obrigatório');
        } else {
            api.post('/convidado', {
                codigo: 3,
                nome: name,
                socio: await AsyncStorage.getItem('SOCI_CODIGO'),
                tipo,
                cpf
            }).then(function (response) {
                if (!response.data) {
                    alert('Não foi possível adicionar o convidado no momento. Tente novamente mais tarde');
                } else {
                    carregarConvidados();
                    setModalVisible(!modalVisible);
                }
            }).catch(function (err) {
                console.log(err);
                alert('Não foi possível adicionar o convidado no momento. Tente novamente mais tarde');
            });
        }
    }

    const carregarConvidados = async () => {
        const sociCodigo = await AsyncStorage.getItem('SOCI_CODIGO');
        api.get(`/convidado/${sociCodigo}`)
            .then(function (response) {
                setTableData(response.data);

            })
            .catch(function (err) {
                console.log(err);
            })
    }

    const userBox = (convidado) => (
        <View style={{ height: 70, width: '100%' }}>
            <View style={{ height: '50%', justifyContent: 'center' }}>
                <Text style={{ color: '#535467', fontWeight: 'bold' }}>Nome : {convidado.CONV_TITU_NOME}</Text>
            </View>
            <View style={{ height: '50%', justifyContent: 'center' }}>
                <Text style={{ color: '#535467', fontWeight: 'bold' }}>CPF: {convidado.CONV_TITU_CPFCNPJ}</Text>
            </View>
        </View>
    )

    const chechBox = (index) => {
        return (
            <View>
                <CheckBox
                    key={index}
                    center
                    checkedColor='#03A64A'
                    checked={tableState[index]}
                    onPress={()=>handleCheckboxClick(index)}
                />
            </View>
        )
    }

    const handleCheckboxClick = (checkBox) => {
        setTableState(state=>state.map((item,index)=>{
            if(checkBox == index){
                return !item;
            }else{
                return item;
            }
        }));
    }

    return (
        <>
            <View style={styles.titleBar}>
                <View style={styles.titleBarStyles}>
                    <Text style={styles.text}>{title}</Text>
                </View>
            </View>
            <View style={{ flex: 1, alignItems: 'center', position: 'relative' }}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(false);
                        setTitle('Selecione os convidados da lista ou cadastre novos');
                    }}>
                    <View style={styles.modalContainer}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.textInput}>Nome do(a) Convidado(a):</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={(name) => setName(name)}
                            />
                        </View>
                        <View style={styles.inputBlock}>
                            <Text style={styles.textInput}>CPF:</Text>
                            <TextInputMask
                                type={'cpf'}
                                value={cpf}
                                onChangeText={text => {
                                    setCpf(text);
                                    if (text === '') {
                                        setTipo('I');
                                    } else {
                                        setTipo('A');
                                    }
                                }}
                                style={styles.input}
                            />
                        </View>
                        <View style={{}}>
                            <Button
                                onPress={() => {
                                    addGuest();
                                    setCpf('');
                                }}
                                title={'Cadastrar Convidado(a)'}
                                color={'#03A64A'}
                            />
                        </View>
                        <View style={{ marginTop: 15, alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                            <Text style={{
                                color: '#D91122',
                                fontSize: 13,
                                fontWeight: 'bold'
                            }}
                            >Caso o(a) convidado(a) tenha menos de 12 anos, deixar campo CPF em branco</Text>
                        </View>
                    </View>
                </Modal>
                <Modal
                    visible={modalVisibility}
                    transparent={true}
                >
                    <View style={styles.modalContainerLoading}>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>
                </Modal>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <Text style={styles.text}>+</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.container}>
                    <ScrollView>
                        <Table flexArr={[1, 4]} borderStyle={{ borderWidth: 2, borderColor: '#3B3F8C' }}>
                            {
                                tableData.map((convidado, index) => (
                                    <Row key={index} flexArr={[1, 4]} data={[chechBox(index), userBox(convidado)]} textStyle={{ color: '#535467', fontWeight: 'bold' }} />
                                ))
                            }
                        </Table>
                    </ScrollView>
                </View>



                <View style={styles.bottomButton}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            setModalVisible(true);
                        }}
                    >
                        <Text style={{
                            fontSize: 18,
                            textAlign: 'center',
                            color: '#F2EFEA',
                        }}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </>
    )
}



export default Guests;