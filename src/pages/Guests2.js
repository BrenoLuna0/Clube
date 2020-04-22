import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Text, Dimensions, ScrollView, TouchableOpacity, Modal, Button, AsyncStorage } from 'react-native'
const { width, height } = Dimensions.get('window');
import { TextInputMask } from 'react-native-masked-text';
import { Table, Row } from 'react-native-table-component';
import { CheckBox } from 'react-native-elements'
import api from '../services/api';

function Guests({ navigation }) {
    const [title, setTitle] = useState('Adicione seus Convidados na Lista');
    const [tableData, setTableData] = useState([]);
    const [tableState, setTableState] = useState(false);

    useEffect(() => {
        async function carregarConvidados() {
            const sociCodigo = await AsyncStorage.getItem('SOCI_CODIGO');
            api.get(`/convidado/${sociCodigo}`)
                .then(function (response) {
                    setTableData(response.data);

                })
                .catch(function (err) {
                    console.log(err);
                })
        }

        carregarConvidados();
        console.log(tableState);
    }, []);

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

    const chechBox = (index) => (
        <View>
            <CheckBox
                center
                checkedColor='#03A64A'
                checked={tableState}
                onPress={() => {
                    setTableState(!tableState);
                }}
            />
        </View>
    )

    return (
        <>
            <View style={styles.titleBar}>
                <View style={styles.titleBarStyles}>
                    <Text style={styles.text}>{title}</Text>
                </View>
            </View>
            <View style={{ flex: 1, alignItems: 'center', position: 'relative' }}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {

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
                            //setModalVisible(true);
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

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#3B3F8C',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        height: 107
    },


    container: {
        position: 'absolute',
        top: 0,
        height: '80%',
        width: '95%',
        marginTop: 5,
    },

    text: {
        fontSize: 19,
        textAlign: 'center',
        color: '#F2EFEA',
        fontWeight: 'bold'
    },

    buttonContainer: {
        backgroundColor: '#03A64A',
        marginTop: 5,
        width: 65,
        borderRadius: 50,
        height: 65,
        position: 'absolute',
        bottom: '20%',
        right: '5%',
        zIndex: 100

    },

    guestRemove: {
        backgroundColor: '#D91122',
        marginTop: 9,
        width: 50,
        borderRadius: 7,
        height: 50,
        marginLeft: '5%',

    },

    button: {
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },

    buttonScroll: {
        //justifyContent: 'center',
        width: '100%',
        height: '100%',
        //alignItems: 'center',
    },

    buttonCadastrar: {
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },

    titleBar: {
        backgroundColor: '#3B3F8C',
        //justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        height: 80
    },

    titleBarStyles: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: 60,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#F2EFEA',
        borderRadius: 10,
    },
    bottomButton: {
        position: 'absolute',
        bottom: 20,
        width: '80%',
        height: 45,
        backgroundColor: '#3B3F8C',
        borderRadius: 7,
    },
    scrollContainer: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '77%',
    },

    modalContainer: {
        marginTop: '38%',
        flex: 1,
        backgroundColor: '#FFF',
        width: '100%',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#3B3F8C'
    },

    modalScrollContainer: {
        marginTop: '38%',
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF',
    },

    inputBlock: {
        width: '80%',
    },

    textInput: {
        marginLeft: 10,
        fontSize: 18,
    },

    input: {
        marginTop: 10,
        fontSize: 18,
        borderColor: 'black',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        width: '100%',
        marginBottom: 15,
        marginLeft: 10,
    },

    guestBlock: {
        height: 50,
        width: '80%',
        backgroundColor: '#3B3F8C',
        marginTop: 9,
    },

    guestBlockScroll: {
        height: 55,
        width: '100%',
        backgroundColor: '#3B3F8C',
        marginTop: 9,
        borderRadius: 7,
    },

    guestContainer: {
        flexDirection: "row"
    },

    guestText: {
        marginTop: 3,
        fontSize: 14,
        marginLeft: 10,
        color: '#F2EFEA'
    },

    buttonContainerCadastrar: {
        width: '80%',
        height: 50,
        backgroundColor: '#03A64A',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
});


export default Guests;