import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
        borderRadius: 10,
    },
    container: {
        height: '80%',
        width: '100%',
        marginTop: 0,
    },
    buttonBox: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    }
})