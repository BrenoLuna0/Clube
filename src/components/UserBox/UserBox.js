import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

function Component({ convidado }) {
  return (
    <TouchableOpacity style={{ height: 70, width: "100%" }}>
      <View
        style={{ height: "50%", justifyContent: "center", paddingLeft: 10 }}
      >
        <Text style={{ color: "#535467", fontWeight: "bold" }}>
          Nome : {convidado.CONV_TITU_NOME}
        </Text>
      </View>
      <View
        style={{ height: "50%", justifyContent: "center", paddingLeft: 10 }}
      >
        <Text style={{ color: "#535467", fontWeight: "bold" }}>
          CPF: {convidado.CONV_TITU_CPFCNPJ}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default Component;
