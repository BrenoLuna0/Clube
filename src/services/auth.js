import api from './api';
import { AsyncStorage } from 'react-native';



export const onSignIn = async (codigo, senha) => {
    const result = api.post('/usuario', {
        codigo,
        senha
    }).then(async function (response) {
        if (response.data) {
            await AsyncStorage.setItem('usuario', response.data[0].CLIE_CPFCNPJ);
            return true;
        } else {
            return false;
        }
    })
        .catch(function (error) {
            return false;
        });


    return result;
};

export const onSignOut = () => {
    AsyncStorage.removeItem('usuario');
}

export const isSignedIn = async () => {
    const token = await AsyncStorage.getItem('usuario');

    return (token !== null) ? true : false;
};
