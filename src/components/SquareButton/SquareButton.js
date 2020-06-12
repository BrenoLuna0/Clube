import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./SquareButton.style";

function Component({ text, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Component;
