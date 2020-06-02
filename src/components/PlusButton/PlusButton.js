import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./PlusButton.style";

function Component({ onPress }) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Component;
