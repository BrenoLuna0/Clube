import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./CancelButton.style";

function Component({ title, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Component;
