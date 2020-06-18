import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerMaster: {
    //alignItems: "center",
    justifyContent: "flex-end",
  },

  inputBlock: {
    width: "80%",
  },

  titleBar: {
    backgroundColor: "#3B3F8C",
    //justifyContent: 'center',
    alignItems: "center",
    width: "100%",
    height: 80,
    position: "absolute",
    top: 0,
  },

  titleBarStyles: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: 70,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#F2EFEA",
    borderRadius: 10,
  },

  text: {
    fontSize: 16,
    textAlign: "center",
    color: "#F2EFEA",
    fontWeight: "bold",
  },

  button: {
    marginTop: 15,
    width: "100%",
    alignItems: "center",
  },
});
