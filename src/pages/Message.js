import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../styles/Message.style";

function Message({ navigation }) {
  const { message } = navigation.state.params;

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.title}>{message.MESG_TITULO}</Text>
        </View>
        <Text style={styles.text}>{message.MESG_DESCRICAO}</Text>
      </View>
    </ScrollView>
  );
}

export default Message;
