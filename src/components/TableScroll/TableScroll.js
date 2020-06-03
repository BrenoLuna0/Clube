import React from "react";
import { View, ScrollView } from "react-native";
import { Table, Row } from "react-native-table-component";
import CheckBox from "../CheckBox/CheckBox";
import UserBox from "../UserBox/UserBox";
import styles from "./TableScroll.style";

function Component({ tableData, tableState, handleCheckboxClick }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Table
          flexArr={[1, 4]}
          borderStyle={{ borderWidth: 1, borderColor: "#3B3F8C" }}
        >
          {tableData.map((convidado, index) => (
            <Row
              key={index}
              flexArr={[1, 4]}
              data={[
                <CheckBox
                  index={index}
                  checked={tableState[index]}
                  onPress={() => handleCheckboxClick(index)}
                />,
                <UserBox convidado={convidado} />,
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
