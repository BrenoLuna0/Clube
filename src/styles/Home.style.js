import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    header: {
        backgroundColor: '#8c8c8c',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        height: 200
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

    content: {
        flex: 1,
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        alignContent: 'center',
        justifyContent: 'center',
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
        fontSize: 16,
        color: '#3B3F8C',
        fontWeight: 'bold',
        marginLeft: 3,
        marginRight: 3
    },

    button: {
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#3B3F8C',
        padding: 10
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
    welcomeBar: {
        alignItems: 'center',
        justifyContent: "center",
        height: 50,
        width: '100%',
    },

    welcomebarStyle: {
        alignItems: 'center',
        justifyContent: "center",
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#3B3F8C',
        borderRadius: 10,
        height: '100%',

    },

    actionMenuButtons: {
        position: 'relative',
        width: '75%',
        height: '55%'
    },

    buttonTopLeft: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3B3F8C',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '48%',
        height: '48%',
    },

    buttonTopRight: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3B3F8C',
        position: 'absolute',
        top: 0,
        right: 0,
        width: '48%',
        height: '48%',
    },

    buttonBottomLeft: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3B3F8C',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '48%',
        height: '48%',
    },

    buttonBottomRight: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3B3F8C',
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '48%',
        height: '48%',
    },

    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    }
})