import { StyleSheet } from "react-native";

export default StyleSheet.create({
  header: {
    backgroundColor: "#8c8c8c",
    alignItems: "center",
    position: "relative",
    width: "100%",
    height: 200,
  },

  containerChild: {
    position: "absolute",
    backgroundColor: "#666666",
    justifyContent: "center",
    borderRadius: 85,
    width: 170,
    height: 170,
    bottom: -85,
  },

  content: {
    flex: 1,
    alignItems: "center",
    position: "relative",
    width: "100%",
    alignContent: "center",
    //justifyContent: "center",
  },

  input: {
    height: 34,
    marginBottom: 10,
    fontSize: 18,
    borderStyle: "solid",
    borderColor: "#8c8c8c",
    borderWidth: 1,
    borderRadius: 7,
  },

  inputBlock: {
    width: "80%",
  },

  text: {
    fontSize: 16,
    color: "#F3F3F3",
    fontWeight: "bold",
    marginLeft: 3,
    marginRight: 3,
  },

  button: {
    //justifyContent: "center",
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "#3B3F8C",
    padding: 10,
    borderRadius: 10,
  },

  buttonLine: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "#3B3F8C",
    padding: 10,
    borderRadius: 10,
  },

  link: {
    color: "#8c8c8c",
    marginTop: 5,
  },

  register: {
    position: "absolute",
    bottom: "25%",
    width: "60%",
  },
  welcomeBar: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "100%",
    marginTop: -25,
    marginBottom: 10,
  },

  welcomebarStyle: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3B3F8C",
    height: "100%",
    width: "100%",
  },

  actionMenuButtons: {
    position: "relative",
    width: "75%",
    height: "80%",
    borderRadius: 50,
  },

  buttonTopLeft: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3B3F8C",
    position: "absolute",
    top: 0,
    //left: 0,
    width: "48%",
    height: "48%",
    borderTopLeftRadius: 15,
  },

  buttonTopRight: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3B3F8C",
    position: "absolute",
    top: 0,
    //right: 0,
    width: "48%",
    height: "48%",
    borderTopRightRadius: 15,
  },

  buttonBottomLeft: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3B3F8C",
    position: "absolute",
    bottom: 0,
    //left: 0,
    width: "48%",
    height: "48%",
    borderBottomLeftRadius: 15,
  },

  buttonBottomRight: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3B3F8C",
    position: "absolute",
    bottom: 0,
    //right: 0,
    width: "48%",
    height: "48%",
    borderBottomRightRadius: 15,
  },

  lineButton: {
    //flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3B3F8C",
    position: "absolute",
    bottom: 0,
    //right: 0,
    width: "75%",
    height: 50,
    borderRadius: 15,
  },

  buttonText: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
    position: "absolute",
    bottom: 16,
  },
});
