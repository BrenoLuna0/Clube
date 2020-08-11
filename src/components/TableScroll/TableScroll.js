import React from "react";
import { View, ScrollView, Alert } from "react-native";
import { Table, Row } from "react-native-table-component";
import CheckBox from "../CheckBox/CheckBox";
import UserBox from "../UserBox/UserBox";
import DeleteButton from "../DeleteButton/DeleteButton";
import styles from "./TableScroll.style";

function Component({
  tableData,
  tableState,
  handleCheckboxClick,
  handleDeleteClick,
}) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Table
          flexArr={[1, 4, 1]}
          borderStyle={{ borderWidth: 1, borderColor: "#3B3F8C" }}
        >
          {tableData.map((convidado, index) => (
            <Row
              key={index}
              flexArr={[1, 4, 1]}
              data={[
                <CheckBox
                  index={index}
                  checked={tableState[index]}
                  onPress={() => handleCheckboxClick(index)}
                />,
                <UserBox convidado={convidado} />,
                <DeleteButton
                  onPress={() => {
                    handleDeleteClick(convidado.CONV_TITU_CODIGO);
                  }}
                />,
              ]}
              textStyle={{ color: "#535467", fontWeight: "bold" }}
            />
          ))}
        </Table>
      </ScrollView>
    </View>
  );
}

export default Component;
