import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./LineButton.style";

function Component({ text, marginTop, onPress }) {
  return (
    <>
      <View style={[styles.container, { marginTop }]}>
        <View style={[styles.box, { width: "20%" }]}>
          <Icon name={"lock"} size={28} color="#3B3F8C" />
        </View>
        <View style={[styles.box, { width: "80%" }]}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
              <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.separator}></View>
    </>
  );
}

export default Component;
