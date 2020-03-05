import api from './api';
import { AsyncStorage } from 'react-native';



export const onSignIn = async (login, senha) => {
    return api.post('/autenticar', {
        login,
        senha
    }).then(function ({ usuario, token }) {
        console.log(usuario);
        console.log(token);
        AsyncStorage.setItem('token', token);
        return usuario;
    })
        .catch(function (error) {
            return error;
        });

};

export const onSignOut = () => AsyncStorage.removeItem('token');

export const isSignedIn = async () => {
    const token = await AsyncStorage.getItem('token');

    return (token !== null) ? true : false;
};
