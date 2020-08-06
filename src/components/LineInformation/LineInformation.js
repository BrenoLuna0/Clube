import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./LineInformation.styles";

function Component({ icon, text, marginTop }) {
  return (
    <>
      <View style={[styles.container, { marginTop }]}>
        <View style={[styles.box, { width: "20%" }]}>
          <Icon name={icon} size={28} color="#444444" />
        </View>
        <View style={[styles.box, { width: "80%" }]}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
      <View style={styles.separator}></View>
    </>
  );
}

export default Component;
