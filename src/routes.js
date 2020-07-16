import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { navigationRef } from "./services/navigation";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import DatePicker from "./pages/DatePicker";
import Guests2 from "./pages/Guests2";
import Activities from "./pages/Activities";
import Schedulles from "./pages/Schedulles";
import About from "./pages/About";
import Password from "./pages/Password";
import SelectedGuests from "./pages/SelectedGuests";

const AppContainer = createAppContainer(
  createStackNavigator({
    Login: {
      screen: Login,
      navigationOptions: {
        title: "",
        headerShown: false,
      },
    },
    Register: {
      screen: Register,
      navigationOptions: {
        title: "",
        headerShown: false,
      },
    },
    Home: {
      screen: Home,
      navigationOptions: {
        title: "",
        headerShown: false,
      },
    },
    DatePicker: {
      screen: DatePicker,
      navigationOptions: {
        title: "",
        headerBackTitleVisible: true,
        headerBackTitle: "Voltar",
        headerTintColor: "#F2EFEA",
        headerStyle: {
          backgroundColor: "#3B3F8C",
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
      },
    },
    Guests2: {
      screen: Guests2,
      navigationOptions: {
        title: "",
        headerBackTitleVisible: true,
        headerBackTitle: "Voltar",
        headerTintColor: "#F2EFEA",
        headerStyle: {
          backgroundColor: "#3B3F8C",
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
      },
    },
    SelectedGuests: {
      screen: SelectedGuests,
      navigationOptions: {
        title: "",
        headerBackTitleVisible: true,
        headerBackTitle: "Voltar",
        headerTintColor: "#F2EFEA",
        headerStyle: {
          backgroundColor: "#3B3F8C",
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
      },
    },
    Activities: {
      screen: Activities,
      navigationOptions: {
        title: "",
        headerShown: false,
      },
    },
    Schedulles: {
      screen: Schedulles,
      navigationOptions: {
        title: "",
        headerBackTitleVisible: true,
        headerBackTitle: "Voltar",
        headerTintColor: "#F2EFEA",
        headerStyle: {
          backgroundColor: "#3B3F8C",
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
      },
    },
    About: {
      screen: About,
      navigationOptions: {
        title: "",
        headerBackTitleVisible: true,
        headerBackTitle: "Voltar",
        headerTintColor: "#F2EFEA",
        headerStyle: {
          backgroundColor: "#3B3F8C",
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
      },
    },
    Password: {
      screen: Password,
      navigationOptions: {
        title: "",
        headerBackTitleVisible: true,
        headerBackTitle: "Voltar",
        headerTintColor: "#F2EFEA",
        headerStyle: {
          backgroundColor: "#3B3F8C",
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
      },
    },
  })
);

const Routes = () => {
  return <AppContainer ref={navigationRef} />;
};

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
