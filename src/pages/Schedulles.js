import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Picker } from 'react-native'

function Schedulles({ navigation }) {
    const [activity, setActivity] = useState('');
    const [activityIndex, setActivityIndex] = useState(0);
    const schedulle = [[{ dia: 'Segunda', horario: '17:00' }, { dia: 'Segunda', horario: '18:00' }, { dia: 'Segunda', horario: '19:00' }, { dia: 'Segunda', horario: '20:00' }, { dia: 'Terça', horario: '06:00' }, { dia: 'Terça', horario: '07:00' }, { dia: 'Terça', horario: '08:00' }, { dia: 'Quarta', horario: '17:00' }, { dia: 'Quarta', horario: '18:00' }, { dia: 'Quarta', horario: '19:00' }, { dia: 'Quarta', horario: '20:00' }, { dia: 'Quinta', horario: '06:00' }, { dia: 'Quinta', horario: '07:00' }, { dia: 'Quinta', horario: '08:00' }],//pilates
    [{ dia: 'Segunda', horario: '19:10' }, { dia: 'Terça', horario: '20:10' }, { dia: 'Quarta', horario: '20:10' }, { dia: 'Quinta', horario: '19:10' }], //cross training
    [{ dia: 'Segunda', horario: '19:00' }, { dia: 'Terça', horario: '17:00' }, { dia: 'Quarta', horario: '19:00' }], //fit dance
    [{ dia: 'Terça', horario: '06:00' }, { dia: 'Terça', horario: '19:00' }, { dia: 'Quinta', horario: '06:00' }, { dia: 'Quinta', horario: '19:00' }], //Hidroginástica
    [{ dia: 'Terça', horario: '07:15' }, { dia: 'Quinta', horario: '08:15' }, { dia: 'Quinta', horario: '20:15' }], //Bike
    [{ dia: 'Terça (04 a 06 anos)', horario: '14:30' }, { dia: 'Terça (07 a 13 anos)', horario: '15:10' }, { dia: 'Quinta (04 a 06 anos)', horario: '14:30' }, { dia: 'Quinta (07 a 13 anos)', horario: '15:10' }], //Natação Infantil
    [{ dia: 'Terça', horario: '16:00' }, { dia: 'Quinta', horario: '06:00' }, { dia: 'Quinta (04 a 07 anos)', horario: '06:00' }], //Karatê Inafntil
    [{ dia: 'Terça', horario: '16:00' }, { dia: 'Quarta', horario: '07:00' },], // Yoga
    [{ dia: 'Terça (04 a 07 anos)', horario: '16:00' }, { dia: 'Terça (08 a 12 anos)', horario: '17:00' }, { dia: 'Quinta (04 a 07 anos)', horario: '16:00' }, { dia: 'Quinta (08 a 12 anos)', horario: '17:00' }], //Futebol Infantil
    [{ dia: 'Terça', horario: '18:00' }, { dia: 'Quinta', horario: '18:00' }], // Volei Adulto
    [{ dia: 'Terça', horario: '20:00' }], // Futebol Adulto
    [{ dia: 'Quarta (04 a 06 anos)', horario: '15:00' }, { dia: 'Quarta (07 a 10 anos)', horario: '15:45' }, { dia: 'Sexta (04 a 06 anos)', horario: '15:00' }, { dia: 'Sexta (07 a 10 anos)', horario: '15:45' }], //Escolinha de tênis
    [{ dia: 'Quarta', horario: '19:30' }], // Futebol Veteranos
    [{ dia: 'Quinta', horario: '17:00' }], // Power Ballet
    [{ dia: 'Quinta (10 a 15 anos)', horario: '17:10' }]] //Volei Infantil

    return (
        <>
            <View style={styles.header}>
            </View>

            <Picker
                selectedValue={activity}
                style={{ width: '90%', height: 50, marginLeft: 15 }}
                onValueChange={(itemValue, itemIndex) => {
                    setActivity(itemValue);
                    setActivityIndex(itemIndex)
                }}>
                <Picker.Item label="Pilates" value={0} />
                <Picker.Item label="Cross Training" value={1} />
                <Picker.Item label="Fit Dance" value={2} />
                <Picker.Item label="Hidroginástica" value={3} />
                <Picker.Item label="Bike" value={4} />
                <Picker.Item label="Natação Infantil" value={5} />
                <Picker.Item label="Karate Infantil" value={6} />
                <Picker.Item label="Yoga" value={7} />
                <Picker.Item label="Futebol Infantil" value={8} />
                <Picker.Item label="Vôlei Adulto" value={9} />
                <Picker.Item label="Futebol Adulto" value={10} />
                <Picker.Item label="Escolinha de Tênis" value={11} />
                <Picker.Item label="Futebol Veteranos" value={12} />
                <Picker.Item label="Power Ballet" value={13} />
                <Picker.Item label="Vôlei Infantil" value={14} />
            </Picker>
            <View style={{ flex: 1, backgroundColor: 'pink' }}>
                <View style={{ width: '100%', height: '74%' }}>
                    <ScrollView>
                        {schedulle[activityIndex].map((atividade) => {
                            return (
                                <>
                                    <View style={{ width: '100%', height: 60, backgroundColor: 'grey', marginTop: 15 }}>
                                        <Text>{atividade.dia}</Text>
                                        <Text>{atividade.horario}</Text>
                                    </View>
                                </>
                            )
                        })}

                    </ScrollView>
                </View>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    buttonLayout: {
        width: '31%',
        height: 120,
        marginLeft: '1%',
        marginRight: '1%',
    },

    header: {
        backgroundColor: '#8c8c8c',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        height: 100
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

    login: {
        alignItems: 'center',
        position: 'relative',
        height: '60%',
        width: '100%',
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
        position: 'absolute',
        bottom: '25%',
        width: '60%',
    }
});


export default Schedulles;