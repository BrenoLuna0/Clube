import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: 70,
    height: 50,
    marginHorizontal: 5,
    backgroundColor: "#3B3F8C",
    borderRadius: 8,
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
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },

  text: {
    fontSize: 16,
    color: "#FFF",
  },
});
