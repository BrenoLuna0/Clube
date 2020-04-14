import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, Dimensions, ScrollView, TouchableOpacity, Modal, Button } from 'react-native'
const { width, height } = Dimensions.get('window');
import { TextInputMask } from 'react-native-masked-text';

function Guests({ navigation }) {
    const [uniqueValue, setUniqueValue] = useState(1);
    const [guestList, setGuestList] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalGuestsVisible, setModalGuestsVisible] = useState(false);
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');

    function addGuest(guest) {

        let tmp = guestList.filter(function (gue) {
            if (gue.cpf === guest.cpf) {
                return true;
            } else {
                return false
            }
        });
        if (tmp.length === 0) {
            guestList.push(guest)
            setGuestList(guestList);
            setCpf('');
            setName('');
        } else {
            alert('Convidado já está presente na lista');
        }

        //console.log(guestList);
    }

    function removeItem(c) {
        console.log(c);
        guestList.splice(guestList.indexOf(c), 1)
        setGuestList(guestList);
    }

    function remount() {
        setUniqueValue(uniqueValue + 1);
    }

    return (
        <>
            <View style={styles.titleBar}>
                <View style={styles.titleBarStyles}>
                    <Text style={styles.text}>Adicione seus Convidados na Lista</Text>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            setModalVisible(false);
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
                                    }}
                                    style={styles.input}
                                />
                            </View>
                            <View style={{}}>
                                <Button
                                    onPress={() => {
                                        addGuest({
                                            name,
                                            cpf
                                        });
                                        setModalVisible(false);
                                    }}
                                    title={'Adicionar Convidado'}
                                    color={'#03A64A'}
                                />
                            </View>
                            <View style={{ marginTop: 7 }}>
                                <Button
                                    onPress={() => {
                                        setModalGuestsVisible(true);
                                        setModalVisible(false);
                                    }}
                                    title={'Convidados Recentes'}
                                    color={'#3B3F8C'}
                                />
                            </View>
                        </View>
                    </Modal>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalGuestsVisible}
                        onRequestClose={() => {
                            setModalGuestsVisible(false);
                        }}>
                        <View style={styles.modalScrollContainer}>
                            <ScrollView style={{ backgroundColor: '#F2EFEA' }}>
                                <View style={{ height: '100%' }}>
                                    <View style={styles.guestBlockScroll}>
                                        <TouchableOpacity
                                            style={styles.buttonScroll}
                                            onPress={() => {
                                                addGuest({
                                                    name: 'Niverton Magalhães Menezes',
                                                    cpf: '15321564515'
                                                });
                                                setModalGuestsVisible(false);
                                            }}
                                        >
                                            <Text style={styles.guestText}>Nome: Niverton Magalhães Menezes</Text>
                                            <Text style={styles.guestText}>CPF: 15321564515</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.guestBlockScroll}>
                                        <TouchableOpacity
                                            style={styles.buttonScroll}
                                            onPress={() => {

                                            }}
                                        >
                                            <Text style={styles.guestText}>Nome: Niverton Magalhães Menezes</Text>
                                            <Text style={styles.guestText}>CPF: 15321564515</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.guestBlockScroll}>
                                        <TouchableOpacity
                                            style={styles.buttonScroll}
                                            onPress={() => {

                                            }}
                                        >
                                            <Text style={styles.guestText}>Nome: Niverton Magalhães Menezes</Text>
                                            <Text style={styles.guestText}>CPF: 15321564515</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.guestBlockScroll}>
                                        <TouchableOpacity
                                            style={styles.buttonScroll}
                                            onPress={() => {

                                            }}
                                        >
                                            <Text style={styles.guestText}>Nome: Niverton Magalhães Menezes</Text>
                                            <Text style={styles.guestText}>CPF: 15321564515</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.guestBlockScroll}>
                                        <TouchableOpacity
                                            style={styles.buttonScroll}
                                            onPress={() => {

                                            }}
                                        >
                                            <Text style={styles.guestText}>Nome: Niverton Magalhães Menezes</Text>
                                            <Text style={styles.guestText}>CPF: 15321564515</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.guestBlockScroll}>
                                        <TouchableOpacity
                                            style={styles.buttonScroll}
                                            onPress={() => {

                                            }}
                                        >
                                            <Text style={styles.guestText}>Nome: Niverton Magalhães Menezes</Text>
                                            <Text style={styles.guestText}>CPF: 15321564515</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.guestBlockScroll}>
                                        <TouchableOpacity
                                            style={styles.buttonScroll}
                                            onPress={() => {

                                            }}
                                        >
                                            <Text style={styles.guestText}>Nome: Niverton Magalhães Menezes</Text>
                                            <Text style={styles.guestText}>CPF: 15321564515</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.guestBlockScroll}>
                                        <TouchableOpacity
                                            style={styles.buttonScroll}
                                            onPress={() => {

                                            }}
                                        >
                                            <Text style={styles.guestText}>Nome: Niverton Magalhães Menezes</Text>
                                            <Text style={styles.guestText}>CPF: 15321564515</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    </Modal>
                    <ScrollView key={uniqueValue} style={styles.scrollContainer}>
                        {guestList.map((guest) => {
                            return (
                                <View key={guest.cpf} style={styles.guestContainer}>
                                    <View style={styles.guestBlock}>
                                        <Text style={styles.guestText}>Nome: {guest.name}</Text>
                                        <Text style={styles.guestText}>CPF: {guest.cpf}</Text>
                                    </View>
                                    <View style={styles.guestRemove}>
                                        <TouchableOpacity
                                            style={styles.button}
                                            onPress={() => {
                                                removeItem(guest);
                                                remount();
                                            }}
                                        >
                                            <Text style={styles.text}>X</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                        })}
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    setModalVisible(true);
                                }}
                            >
                                <Text style={styles.text}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
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
        alignItems: 'center',
        position: 'relative',
        height: '100%',
        width: '100%',
        marginTop: 5,
    },

    text: {
        fontSize: 19,
        textAlign: 'center',
        color: '#F2EFEA',
        fontWeight : 'bold'
    },

    buttonContainer: {
        backgroundColor: '#03A64A',
        marginTop: 5,
        width: 50,
        borderRadius: 7,
        height: 50,
        marginLeft: '85%'
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

    titleBar: {
        backgroundColor: '#3B3F8C',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        height: 107
    },

    titleBarStyles : {
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: 60,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#F2EFEA',
        borderRadius : 10,
    },
    bottomButton: {
        position: 'absolute',
        bottom: 45,
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
        marginTop: '43%',
        height: 250,
        backgroundColor: '#F2EFEA',
        width: '100%',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#3B3F8C'
    },

    modalScrollContainer: {
        flex: 1,
        marginTop: '43%',
        height: 250,
        width: '100%'
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
    }
});


export default Guests;