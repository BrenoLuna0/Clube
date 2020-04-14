import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {navigationRef} from './services/navigation'

import Login from '../src/pages/Login';
import Register from '../src/pages/Register';
import Home from '../src/pages/Home';
import DatePicker from '../src/pages/DatePicker';
import Guests from '../src/pages/Guests';
import Activities from '../src/pages/Activities';
import Schedulles from '../src/pages/Schedulles';

const AppContainer = createAppContainer(
    createStackNavigator({
        Login: {
            screen: Login,
            navigationOptions: {
                title: '',
                headerShown : false,
            }
        },
        Register: {
            screen: Register,
            navigationOptions: {
                title: '',
                headerShown: false
            }
        },
        Home: {
            screen: Home,
            navigationOptions: {
                title: '',
                headerShown: false
            }
        },
        DatePicker: {
            screen: DatePicker,
            navigationOptions: {
                title: '',
                headerShown: false
            }
        },
        Guests: {
            screen: Guests,
            navigationOptions: {
                title: '',
                headerShown: false
            }
        },
        Activities: {
            screen: Activities,
            navigationOptions: {
                title: '',
                headerShown: false
            }
        },
        Schedulles: {
            screen: Schedulles,
            navigationOptions: {
                title: '',
                headerShown: false,
                
            }
        },
    })
);

const Routes = ()=> {return <AppContainer ref={navigationRef}/>}

export default Routes;

/*export const SignedOutRoutes = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            title: '',
            headerShown: false
        }
    },
    Register: {
        screen: Register,
        navigationOptions: {
            title: '',
            headerShown: false
        }
    },

});


export const SignedInRoutes = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: '',
            headerShown: false
        }
    },
    DatePicker: {
        screen: DatePicker,
        navigationOptions: {
            title: '',
            headerShown: false
        }
    },
    Guests: {
        screen: Guests,
        navigationOptions: {
            title: '',
            headerShown: false
        }
    },
    Activities: {
        screen: Activities,
        navigationOptions: {
            title: '',
            headerShown: false
        }
    },
    Schedulles: {
        screen: Schedulles,
        navigationOptions: {
            title: '',
            headerShown: false,
            
        }
    },

});

export const createRootNavigator = (signedIn = false) => {
    return createAppContainer(
        createStackNavigator({
            SignedIn: { screen: SignedInRoutes },
            SignedOut: { screen: SignedOutRoutes }
        },
            {
                headerMode: "none",
                mode: "modal",
                initialRouteName: signedIn ? "SignedIn" : "SignedOut",
                navigationOptions: {
                    gesturesEnabled: false
                }
            })
    );
};*/