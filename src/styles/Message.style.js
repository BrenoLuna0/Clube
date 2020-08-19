import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#EEEEEE",
    height: "auto",
    width: "100%",
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    padding: 7,
    marginBottom: 8,
  },

  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 25,
  },

  text: {
    fontSize: 14,
  },
});
