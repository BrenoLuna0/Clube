import React from "react";
import { View, Text } from "react-native";

function Component({ convidado }) {
  return (
    <View style={{ height: 70, width: "100%" }}>
      <View style={{ height: "50%", justifyContent: "center" }}>
        <Text style={{ color: "#535467", fontWeight: "bold" }}>
          Nome : {convidado.CONV_TITU_NOME}
        </Text>
      </View>
      <View style={{ height: "50%", justifyContent: "center" }}>
        <Text style={{ color: "#535467", fontWeight: "bold" }}>
          CPF: {convidado.CONV_TITU_CPFCNPJ}
        </Text>
      </View>
    </View>
  );
}

export default Component;
