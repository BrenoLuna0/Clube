import React from "react";
import { View, Text, TextInput } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import styles from "../styles/TextInput.style";

function Component({ label, mask, ...props }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {mask ? (
        <TextInputMask style={styles.input} {...props} />
      ) : (
        <TextInput style={styles.input} {...props} />
      )}
    </View>
  );
}

export default Component;
