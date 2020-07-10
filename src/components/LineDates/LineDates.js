import React from "react";
import { View, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import SquareButton from "../SquareButton/SquareButton";
import moment from "moment";
import styles from "./LineDates.style";

function Component({ marginTop, dates, navigation }) {
  return (
    <>
      <View style={[styles.container, { marginTop }]}>
        <View style={[styles.box, { width: "20%" }]}>
          <Icon name="calendar" size={28} color="#3B3F8C" />
        </View>
        <View style={[styles.box, { width: "80%" }]}>
          <ScrollView horizontal={true}>
            {dates.map((date, index) => (
              <SquareButton
                key={index}
                text={moment(new Date(date.AGEN_DATA))
                  .add(1, "day")
                  .format("DD/MM")}
                onPress={() => {
                  new Date(date.AGEN_DATA).getDay() == 0 ||
                  new Date(date.AGEN_DATA).getDay() == 6
                    ? navigation.navigate("SelectedGuests", {
                        limite: 1,
                        data: moment(date.AGEN_DATA).add(1, "day"),
                      })
                    : navigation.navigate("SelectedGuests", {
                        limite: 2,
                        data: moment(date.AGEN_DATA).add(1, "day"),
                      });
                }}
              />
            ))}
          </ScrollView>
        </View>
      </View>
      <View style={styles.separator}></View>
    </>
  );
}

export default Component;
