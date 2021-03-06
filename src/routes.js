import React from "react";
//import { Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { navigationRef } from "./services/navigation";

import PlusButton from "./components/PlusButton/PlusButton";

import Login from "./pages/Login";
import Home from "./pages/Home";
import DatePicker from "./pages/DatePicker";
import Guests2 from "./pages/Guests2";
import Schedulles from "./pages/Schedulles";
import About from "./pages/About";
import Password from "./pages/Password";
import SelectedGuests from "./pages/SelectedGuests";
import Inbox from "./pages/Inbox";
import Message from "./pages/Message";

const AppContainer = createAppContainer(
  createStackNavigator({
    Login: {
      screen: Login,
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
      navigationOptions: ({ navigation }) => {
        return {
          title: "Lista de Amigos",
          headerTintColor: "#F2EFEA",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#3B3F8C",
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerRight: () => (
            <PlusButton onPress={navigation.getParam("showModal")} />
          ),
        };
      },
    },
    SelectedGuests: {
      screen: SelectedGuests,
      navigationOptions: {
        title: "",
        headerTintColor: "#F2EFEA",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#3B3F8C",
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
      },
    },
    Schedulles: {
      screen: Schedulles,
      navigationOptions: {
        title: "Visitas Agendadas",
        headerTintColor: "#F2EFEA",
        headerTitleAlign: "center",
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
        title: "Configurações",
        headerTintColor: "#F2EFEA",
        headerTitleAlign: "center",
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
        title: "Mudar Senha",
        headerTintColor: "#F2EFEA",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#3B3F8C",
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
      },
    },
    Inbox: {
      screen: Inbox,
      navigationOptions: {
        title: "Caixa de Entrada",
        headerTintColor: "#F2EFEA",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#3B3F8C",
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
      },
    },
    Message: {
      screen: Message,
      navigationOptions: {
        title: "Mensagem",
        headerTintColor: "#F2EFEA",
        headerTitleAlign: "center",
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
