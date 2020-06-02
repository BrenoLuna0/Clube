import React from "react";
import { View, ScrollView } from "react-native";
import { Table, Row } from "react-native-table-component";
import CheckBox from "../CheckBox/CheckBox";
import UserBox from "../UserBox/UserBox";
import styles from "./TableScroll.style";

function Component({ tableData }) {
  const handleCheckboxClick = (checkBox) => {
    setTableState((state) =>
      state.map((item, index) => {
        if (checkBox == index) {
          if (item == false) {
            if (selectedBoxes < limit) {
              setSelectedBoxes(selectedBoxes + 1);
              return !item;
            } else {
              alert("Número máximo de convidados atingidos");
              return item;
            }
          } else {
            setSelectedBoxes(selectedBoxes - 1);
            return !item;
          }
        } else {
          return item;
        }
      })
    );
  };

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
                <CheckBox index={index} />,
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
