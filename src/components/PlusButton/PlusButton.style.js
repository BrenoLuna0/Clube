import { StyleSheet } from "react-native";

export default StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#F3F3F3",
    marginRight: 4,
    width: 40,
    borderRadius: 50,
    height: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  button: {
    justifyContent: "center",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});
