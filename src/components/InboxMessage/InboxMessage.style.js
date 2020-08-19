import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#EEEEEE",
    height: 65,
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
    color: "#444444",
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
    color: "#444444",
    fontSize: 16,
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
    color: "#777777",
    marginTop: 10,
  },
});
