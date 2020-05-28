import { StyleSheet } from 'react-native';

const IMAGE_HEIGHT = window.width / 2;

export default StyleSheet.create({
    containerMaster: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        height: IMAGE_HEIGHT,
        resizeMode: 'contain',
        marginBottom: 20,
        padding: 10,
        marginTop: 20
    },
    header: {
        backgroundColor: '#3B3F8C',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        height: '38%',
        marginTop : '-5%',
    },

    containerChild: {
        position: 'absolute',
        backgroundColor: '#F2EFEA',
        justifyContent: 'center',
        borderRadius: 85,
        width: 170,
        height: 170,
        bottom: -85
    },

    containerChildImage: {
        position: 'absolute',
        backgroundColor: '#F2EFEA',
        justifyContent: 'center',
        borderRadius: 85,
        width: 170,
        height: 170,
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
        width: '60%',
        marginTop: '10%'
    },

    modalContainer: {
        marginTop: 170,
        flex: 1,
        alignItems : 'center',
        backgroundColor : 'white',
        justifyContent : 'center',
        opacity : 0.4
    }
})