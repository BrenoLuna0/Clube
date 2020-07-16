import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: 100,
    width: "100%",
    flexDirection: "row",
    marginVertical: 10,
  },
  dataContainer: {
    backgroundColor: "#3B3F8C",
    height: "100%",
    width: "35%",
    alignItems: "center",
    justifyContent: "center",
  },
  dataText: {
    color: "#F3F3F3",
    fontSize: 24,
  },
  infoContainer: {
    backgroundColor: "#3B3F8C",
    height: "100%",
    width: "64%",
    position: "absolute",
    right: 0,
  },
  infoTitle: {
    width: "100%",
    height: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  infoTitleText: {
    color: "#F3F3F3",
    fontSize: 16,
    fontWeight: "bold",
  },
  infoGrid: {
    width: "95%",
    height: 80,
    marginHorizontal: "2.5%",
  },
  item: {
    backgroundColor: "#F3F3F3",
    height: 30,
    width: "45%",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
    marginRight: "10%",
  },
});
