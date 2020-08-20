import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./PlusButton.style";

function Component({ onPress }) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Icon name="plus" color="#3B3F8C" size={25} />
      </TouchableOpacity>
    </View>
  );
}

export default Component;
