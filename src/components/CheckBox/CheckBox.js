import React from "react";
import { View, Text } from "react-native";
import { CheckBox } from "react-native-elements";

function Component({ index, checked, onPress }) {
  return (
    <View>
      <CheckBox
        key={index}
        center
        checkedColor="#03A64A"
        checked={checked}
        onPress={onPress}
      />
    </View>
  );
}

export default Component;
