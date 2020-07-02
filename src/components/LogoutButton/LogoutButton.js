import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./LogoutButton.style";

function Component({ onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.text}>Logout </Text>
          <Icon name="logout" size={29} color="#FFF" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Component;
