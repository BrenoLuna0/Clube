import { StyleSheet } from "react-native";

const IMAGE_HEIGHT = window.width / 2;

export default StyleSheet.create({
  containerMaster: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    height: IMAGE_HEIGHT,
    resizeMode: "contain",
    marginBottom: 20,
    padding: 10,
    marginTop: 20,
  },
  header: {
    backgroundColor: "#3B3F8C",
    alignItems: "center",
    width: "100%",
  },

  containerChildImage: {
    backgroundColor: "#F2EFEA",
    justifyContent: "center",
    borderRadius: 85,
    width: 170,
    height: 170,
    //marginTop: 40,
    marginBottom: -85,
  },
});
