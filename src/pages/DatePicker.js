import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import styles from '../styles/DatePickerStyle.style';

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
                        allowRangeSelection={false}
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
                                const data = new Date(selectedStartDate);
                                if(data.getDay() == 0 || data.getDay() == 6){
                                    navigation.navigate('Guests2', { limite :  1 });
                                }else{
                                    navigation.navigate('Guests2', { limite :  2 });
                                }
                                
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




export default DatePicker;