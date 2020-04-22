import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

function DatePicker({ navigation }) {
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);

    function onDateChange(date, type) {
        if (type === 'END_DATE') {
            setSelectedEndDate(date);
        } else {
            setSelectedStartDate(date);
            setSelectedEndDate(null);
        }
    }
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    const endDate = selectedEndDate ? selectedEndDate.toString() : '';

    return (
        <>
            <View style={styles.header}>
                <View style={styles.titleBar}>
                    <Text style={styles.text}>Selecione a Data</Text>
                </View>
            </View>

            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <CalendarPicker
                        onDateChange={onDateChange}
                        allowRangeSelection={true}
                        selectedDayColor={'#03A64A'}
                        weekdays={['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']}
                        months={['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']}
                        previousTitle={'Anterior'}
                        nextTitle={'Próximo'}
                        height={800}
                    />

                </View>
                <View style={styles.login}>
                    <View style={styles.button}>
                        <TouchableOpacity
                            style={styles.buttonBox}
                            onPress={() => {
                                navigation.navigate('Guests2', {});
                            }}
                        >
                            <Text style={styles.buttonText}> Próximo </Text>

                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </>
    );
    //<Text>SELECTED DATE:{startDate}</Text>
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#3B3F8C',
        //justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        height: 80
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

    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    },

    login: {
        alignItems: 'center',
        position: 'relative',
        height: '20%',
        width: '100%',
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
        fontSize: 22,
        textAlign: 'center',
        color: '#F2EFEA',
        fontWeight: 'bold'
    },

    button: {
        backgroundColor: '#3B3F8C',
        marginTop: 1,
        height: 45,
        width: '60%',
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
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

    titleBar: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        height: 60,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#F2EFEA',
        borderRadius : 10,
    },
    container: {
        height: '80%',
        width: '100%',
        backgroundColor: '#FFFFFF',
        marginTop: 0,
    },
    buttonBox: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    }
});


export default DatePicker;