import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, Button, Linking, ScrollView, TouchableOpacity, Image } from 'react-native'

function Activities({ navigation }) {

    return (
        <>
            <View style={styles.header}>
            </View>
            <View style={{ flex: 1 }}>
                <View style={{ width: '100%', height: '100%' }}>
                    <ScrollView>
                        <View style={{ width: '100%', height: 100, flexDirection: 'row', marginTop: 10 }}>
                            <View style={styles.buttonLayout}>
                                <TouchableOpacity style={{ width: '100%', height: '70%' }}>
                                    <Image
                                        style={{ width: '100%', height: '100%' }}
                                        source={{ uri: 'https://images.pexels.com/photos/870170/pexels-photo-870170.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' }}
                                    />

                                </TouchableOpacity>
                                <Text style={{ justifyContent: 'center', alignContent: 'center' }}>Natação Infantil</Text>
                            </View>
                            <View style={styles.buttonLayout}>
                                <TouchableOpacity style={{ width: '100%', height: '70%' }}>
                                    <Image
                                        style={{ width: '100%', height: '100%' }}
                                        source={{ uri: 'https://images.pexels.com/photos/373933/pexels-photo-373933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' }}
                                    />

                                </TouchableOpacity>
                                <Text style={{ justifyContent: 'center', alignContent: 'center' }}>Pilates</Text>
                            </View>
                            <View style={styles.buttonLayout}>
                                <TouchableOpacity style={{ width: '100%', height: '70%' }}>
                                    <Image
                                        style={{ width: '100%', height: '100%' }}
                                        source={{ uri: 'https://images.pexels.com/photos/863977/pexels-photo-863977.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' }}
                                    />

                                </TouchableOpacity>
                                <Text style={{ justifyContent: 'center', alignContent: 'center' }}>Fit Dance</Text>
                            </View>

                        </View>
                        <View style={{ width: '100%', height: 100, flexDirection: 'row', marginTop: 35 }}>
                            <View style={styles.buttonLayout}>
                                <TouchableOpacity style={{ width: '100%', height: '70%' }}>
                                    <Image
                                        style={{ width: '100%', height: '100%' }}
                                        source={{ uri: 'https://cdn.pixabay.com/photo/2016/09/14/23/11/water-aerobics-1670754_960_720.jpg' }}
                                    />

                                </TouchableOpacity>
                                <Text style={{ justifyContent: 'center', alignContent: 'center' }}>Hidroginástica</Text>
                            </View>
                            <View style={styles.buttonLayout}>
                                <TouchableOpacity style={{ width: '100%', height: '70%' }}>
                                    <Image
                                        style={{ width: '100%', height: '100%' }}
                                        source={{ uri: 'https://cdn.pixabay.com/photo/2015/03/02/02/30/cycling-655565_960_720.jpg' }}
                                    />

                                </TouchableOpacity>
                                <Text style={{ justifyContent: 'center', alignContent: 'center' }}>Bike</Text>
                            </View>
                            <View style={styles.buttonLayout}>
                                <TouchableOpacity style={{ width: '100%', height: '70%' }}>
                                    <Image
                                        style={{ width: '100%', height: '100%' }}
                                        source={{ uri: 'https://blogeducacaofisica.com.br/wp-content/uploads/2017/02/criancas_artesmarciais.gif' }}
                                    />

                                </TouchableOpacity>
                                <Text style={{ justifyContent: 'center', alignContent: 'center' }}>Karate Infantil</Text>
                            </View>

                        </View>
                        <View style={{ width: '100%', height: 100, flexDirection: 'row', marginTop: 35 }}>
                            <View style={styles.buttonLayout}>
                                <TouchableOpacity style={{ width: '100%', height: '70%' }}>
                                    <Image
                                        style={{ width: '100%', height: '100%' }}
                                        source={{ uri: 'https://images.pexels.com/photos/1472887/pexels-photo-1472887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' }}
                                    />

                                </TouchableOpacity>
                                <Text style={{ justifyContent: 'center', alignContent: 'center' }}>Yoga</Text>
                            </View>
                            <View style={styles.buttonLayout}>
                                <TouchableOpacity style={{ width: '100%', height: '70%' }}>
                                    <Image
                                        style={{ width: '100%', height: '100%' }}
                                        source={{ uri: 'https://images.pexels.com/photos/2898317/pexels-photo-2898317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' }}
                                    />

                                </TouchableOpacity>
                                <Text style={{ justifyContent: 'center', alignContent: 'center' }}>Futebol Infantil</Text>
                            </View>
                            <View style={styles.buttonLayout}>
                                <TouchableOpacity style={{ width: '100%', height: '70%' }}>
                                    <Image
                                        style={{ width: '100%', height: '100%' }}
                                        source={{ uri: 'https://images.pexels.com/photos/1263426/pexels-photo-1263426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' }}
                                    />

                                </TouchableOpacity>
                                <Text style={{ justifyContent: 'center', alignContent: 'center' }}>Vôlei Adulto</Text>
                            </View>

                        </View>
                        <View style={{ width: '100%', height: 100, flexDirection: 'row', marginTop: 35 }}>
                            <View style={styles.buttonLayout}>
                                <TouchableOpacity style={{ width: '100%', height: '70%' }}>
                                    <Image
                                        style={{ width: '100%', height: '100%' }}
                                        source={{ uri: 'https://images.pexels.com/photos/1198174/pexels-photo-1198174.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' }}
                                    />

                                </TouchableOpacity>
                                <Text style={{ justifyContent: 'center', alignContent: 'center' }}>Futebol Adulto</Text>
                            </View>
                            <View style={styles.buttonLayout}>
                                <TouchableOpacity style={{ width: '100%', height: '70%' }}>
                                    <Image
                                        style={{ width: '100%', height: '100%' }}
                                        source={{ uri: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' }}
                                    />

                                </TouchableOpacity>
                                <Text style={{ justifyContent: 'center', alignContent: 'center', fontSize: 12 }}>Escolinha de Tênis</Text>
                            </View>
                            <View style={styles.buttonLayout}>
                                <TouchableOpacity style={{ width: '100%', height: '70%' }}>
                                    <Image
                                        style={{ width: '100%', height: '100%' }}
                                        source={{ uri: 'https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' }}
                                    />

                                </TouchableOpacity>
                                <Text style={{ justifyContent: 'center', alignContent: 'center', fontSize: 12 }}>Futebol Veteranos</Text>
                            </View>
                            <View style={{ width: '100%', height: 100, flexDirection: 'row', marginTop: 35 }}>

                            </View>

                        </View>
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


export default Activities;