import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#3B3F8C",
    height: 40,
    width: 180,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    position: "absolute",
    bottom: 16,
  },

  text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 3,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});
