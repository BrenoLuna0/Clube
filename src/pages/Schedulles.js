import React, {useState, useEffect} from "react";
import { View, Text, AsyncStorage } from "react-native";
import api from '../services/api';

function Schedulles() {
    const [dates, setDates] = useState([]);

    useEffect(()=>{
        const sociCodigo = await AsyncStorage.getItem("SOCI_CODIGO");
        const token = await AsyncStorage.getItem("token")
        const loadDates = async ()=>{
            await api.get(`/agenda/${sociCodigo}`, {headers : {
                'x-access-token' : token
            }}).then((response)=>{
                setDates(response.data);
            }).catch((err)=>{
                console.log(err);
                alert("Erro ao carregar as datas");
            });
        } 
        loadDates();
    },[])
  return (
    <View>
      <Text>LALALAY</Text>
    </View>
  );
}

export default Schedulles;
