import React from "react";
import { View, Text, TextInput } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import styles from "./TextInput.style";

function Component({ label, mask, ...props }) {
  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <Text style={styles.labelText}>{label}</Text>
      </View>
      {mask ? (
        <TextInputMask style={styles.input} {...props} />
      ) : (
        <TextInput style={styles.input} {...props} />
      )}
    </View>
  );
}

export default Component;
