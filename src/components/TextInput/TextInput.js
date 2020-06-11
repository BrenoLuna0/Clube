import React from "react";
import { View, Text, TextInput } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./TextInput.style";

function Component({
  label,
  mask,
  pass,
  changePassEntry,
  secureTextEntry,
  ...props
}) {
  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <Text style={styles.labelText}>{label}</Text>
      </View>
      {mask ? (
        <TextInputMask style={styles.input} {...props} />
      ) : pass ? (
        <View style={{ flexDirection: "row" }}>
          <View style={{ width: "80%" }}>
            <TextInput
              style={styles.input}
              secureTextEntry={secureTextEntry}
              {...props}
            />
          </View>
          <View
            style={{
              width: "20%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {secureTextEntry ? (
              <Icon
                name="eye-slash"
                size={36}
                color={"#3B3F8C"}
                onPress={changePassEntry}
              />
            ) : (
              <Icon
                name="eye"
                size={36}
                color={"#3B3F8C"}
                onPress={changePassEntry}
              />
            )}
          </View>
        </View>
      ) : (
        <TextInput style={styles.input} {...props} />
      )}
    </View>
  );
}

/**
 *  (
        <TextInput style={styles.input} {...props} />
      )
 */

export default Component;
