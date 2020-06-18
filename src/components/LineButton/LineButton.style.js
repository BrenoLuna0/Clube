import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    marginTop: 15,
  },

  text: {
    color: "#535467",
    fontSize: 16,
  },

  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#535467",
    marginTop: 15,
  },

  box: {
    justifyContent: "center",
    alignItems: "center",
  },

  buttonContainer: {
    width: 150,
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

  buttonText: {
    fontSize: 16,
    color: "#FFF",
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
});
