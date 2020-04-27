import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    containerMaster: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        width: '100%',
        height: 200
    },

    containerChild: {
        position: 'absolute',
        backgroundColor: '#AEAEAE',
        justifyContent: 'center',
        borderRadius: 85,
        width: 170,
        height: 170,
        bottom: 0
    },

    registration: {
        alignItems: 'center',
        position: 'relative',
        height: '80%',
        width: '100%',
        marginTop: 20
    },

    input: {
        height: 34,
        marginBottom: 10,
        fontSize: 18,
        borderStyle: 'solid',
        borderColor: '#8c8c8c',
        borderWidth: 1,
        borderRadius: 7
    },

    inputBlock: {
        width: '80%',
    },

    text: {
        fontSize: 18
    },

    button: {
        marginTop: 5,
        width: '60%',
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
})