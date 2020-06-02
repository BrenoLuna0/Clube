import React from "react";
import { Modal, View, ActivityIndicator } from "react-native";
import styles from "./LoadingScreen.style";

function Component({ visible, transparent }) {
  return (
    <Modal visible={visible} transparent={transparent}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#3B3F8C" />
      </View>
    </Modal>
  );
}

export default Component;
