import api from './api';
import { AsyncStorage } from 'react-native';



export const onSignIn = async (codigo, senha) => {
    const result = api.post('/titular', {
        codigo,
        senha
    }).then(async function (response) {
        if (response.data) {
            await AsyncStorage.setItem('TITU_CODIGO', response.data.titular[0].TITU_CODIGO.toString());
            await AsyncStorage.setItem('TITU_NUME_TITULO', response.data.titular[0].TITU_NUME_TITULO.toString());
            await AsyncStorage.setItem('SOCI_CODIGO', response.data.titular[0].SOCI_CODIGO.toString());
            await AsyncStorage.setItem('SOCI_NOME', response.data.titular[0].SOCI_NOME);
            await AsyncStorage.setItem('SOCI_CPFCNPJ', response.data.titular[0].SOCI_CPFCNPJ);
            await AsyncStorage.setItem('token', response.data.token);
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
    AsyncStorage.removeItem('TITU_CODIGO');
    AsyncStorage.removeItem('TITU_NUME_TITULO');
    AsyncStorage.removeItem('SOCI_CODIGO');
    AsyncStorage.removeItem('SOCI_NOME');
    AsyncStorage.removeItem('SOCI_CPFCNPJ');
    AsyncStorage.removeItem('token');
}

export const isSignedIn = async () => {
    const token = await AsyncStorage.getItem('TITU_CODIGO');

    return (token !== null) ? true : false;
};
