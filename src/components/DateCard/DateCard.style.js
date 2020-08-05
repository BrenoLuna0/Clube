import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: 100,
    width: "100%",
    flexDirection: "row",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  dataContainer: {
    backgroundColor: "#EEEEEE",
    height: "100%",
    width: "35%",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dataText: {
    color: "#3B3F8C",
    fontSize: 20,
    fontWeight: "bold",
  },
  infoContainer: {
    backgroundColor: "#EEEEEE",
    height: "100%",
    width: "64%",
    position: "absolute",
    right: 0,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  infoTitle: {
    width: "100%",
    height: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  infoTitleText: {
    color: "#3B3F8C",
    fontSize: 16,
    fontWeight: "bold",
  },
  infoGrid: {
    width: "95%",
    height: 80,
    marginHorizontal: "2.5%",
  },
  item: {
    backgroundColor: "#EEEEEE",
    height: 30,
    width: "45%",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
    marginRight: "10%",
  },
  itemText: {
    fontSize: 12,
    color: "#333333",
  },
});
