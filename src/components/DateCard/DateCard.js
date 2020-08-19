import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import styles from "./DateCard.style";
import moment from "moment";
import holiday from "../../services/holiday";

function Component({ navigation, data }) {
  const date = moment(new Date(data.AGEN_DATA)).format("DD/MM") || "";
  const guests = data.CONVIDADOS.slice(0, 4) || [];
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        new Date(data.AGEN_DATA).getDay() == 0 ||
        new Date(data.AGEN_DATA).getDay() == 6 ||
        holiday(data.AGEN_DATA)
          ? navigation.navigate("SelectedGuests", {
              limite: 2,
              data: moment(data.AGEN_DATA).add(1, "day"),
            })
          : navigation.navigate("SelectedGuests", {
              limite: 4,
              data: moment(data.AGEN_DATA).add(1, "day"),
            });
      }}
    >
      <View style={styles.dataContainer}>
        <Text style={styles.dataText}>
          {moment(data.AGEN_DATA).add(1, "day").format("DD/MM")}
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoTitle}>
          <Text style={styles.infoTitleText}>Convidados</Text>
        </View>
        <View style={styles.infoGrid}>
          <FlatList
            data={guests}
            keyExtractor={(item) => item.CONV_TITU_CODIGO}
            numColumns={2}
            renderItem={({ item }) => {
              return (
                <View style={styles.item}>
                  <Text style={styles.itemText}>
                    {item.CONV_TITU_NOME.split(" ")[0]}
                  </Text>
                </View>
              );
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default Component;

/*const info = [
    { CONV_TITU_CODIGO: 1, CONV_TITU_NOME: "Niverton Magalhães Menezes" },
    { CONV_TITU_CODIGO: 2, CONV_TITU_NOME: "David Adson Mainho da Silva" },
    { CONV_TITU_CODIGO: 3, CONV_TITU_NOME: "Carlos Adriano Batista Soares" },
    { CONV_TITU_CODIGO: 4, CONV_TITU_NOME: "Breno Gomes de Luna" },
  ];*/
