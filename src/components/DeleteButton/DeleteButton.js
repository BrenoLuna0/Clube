import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./DeleteButton.style";

function Component({ onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name="close" size={24} color="#fc6a78" />
    </TouchableOpacity>
  );
}

export default Component;
