import { StyleSheet } from "react-native";

export default StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#3B3F8C",
    marginTop: 5,
    width: 65,
    borderRadius: 50,
    height: 65,
    position: "absolute",
    bottom: "20%",
    right: "5%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    zIndex: 100,
  },
  button: {
    justifyContent: "center",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});
