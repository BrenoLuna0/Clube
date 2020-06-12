import React from "react";
import { View, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import SquareButton from "../SquareButton/SquareButton";
import moment from "moment";
import styles from "./LineDates.style";

function Component({ marginTop, dates }) {
  return (
    <>
      <View style={[styles.container, { marginTop }]}>
        <View style={[styles.box, { width: "20%" }]}>
          <Icon name="calendar" size={28} color="#3B3F8C" />
        </View>
        <View style={[styles.box, { width: "80%" }]}>
          <ScrollView horizontal={true}>
            {dates.map((date) => (
              <SquareButton
                text={moment(new Date(date.AGEN_DATA)).format("DD/MM")}
                onPress={() => alert("AAAAAAA")}
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
