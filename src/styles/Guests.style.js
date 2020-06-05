import { StyleSheet } from "react-native";

export default StyleSheet.create({
  header: {
    backgroundColor: "#3B3F8C",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: "100%",
    height: 107,
  },

  container: {
    position: "absolute",
    top: 0,
    height: "80%",
    width: "95%",
    marginTop: 5,
  },

  text: {
    fontSize: 16,
    textAlign: "center",
    color: "#F2EFEA",
    fontWeight: "bold",
  },

  buttonContainer: {
    backgroundColor: "#03A64A",
    marginTop: 5,
    width: 65,
    borderRadius: 50,
    height: 65,
    position: "absolute",
    bottom: "20%",
    right: "5%",
    zIndex: 100,
  },

  guestRemove: {
    backgroundColor: "#D91122",
    marginTop: 9,
    width: 50,
    borderRadius: 7,
    height: 50,
    marginLeft: "5%",
  },

  button: {
    justifyContent: "center",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },

  buttonScroll: {
    //justifyContent: 'center',
    width: "100%",
    height: "100%",
    //alignItems: 'center',
  },

  buttonCadastrar: {
    justifyContent: "center",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },

  titleBar: {
    backgroundColor: "#3B3F8C",
    //justifyContent: 'center',
    alignItems: "center",
    position: "relative",
    width: "100%",
    height: 80,
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
  bottomButton: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    alignItems: "center",
  },
  scrollContainer: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "77%",
  },

  modalContainer: {
    marginTop: "38%",
    flex: 1,
    backgroundColor: "#FFF",
    width: "100%",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#3B3F8C",
  },

  modalContainerLoading: {
    marginTop: "38%",
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
    opacity: 0.4,
  },

  modalContainerSaveLoading: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
    opacity: 0.6,
  },

  modalScrollContainer: {
    marginTop: "38%",
    flex: 1,
    width: "100%",
    backgroundColor: "#FFF",
  },

  inputBlock: {
    width: "80%",
  },

  textInput: {
    marginLeft: 10,
    fontSize: 18,
  },

  input: {
    marginTop: 10,
    fontSize: 18,
    borderColor: "black",
    borderStyle: "solid",
    borderBottomWidth: 1,
    width: "100%",
    marginBottom: 15,
    marginLeft: 10,
  },

  guestBlock: {
    height: 50,
    width: "80%",
    backgroundColor: "#3B3F8C",
    marginTop: 9,
  },

  guestBlockScroll: {
    height: 55,
    width: "100%",
    backgroundColor: "#3B3F8C",
    marginTop: 9,
    borderRadius: 7,
  },

  guestContainer: {
    flexDirection: "row",
  },

  guestText: {
    marginTop: 3,
    fontSize: 14,
    marginLeft: 10,
    color: "#F2EFEA",
  },

  buttonContainerCadastrar: {
    width: "80%",
    height: 50,
    backgroundColor: "#03A64A",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
