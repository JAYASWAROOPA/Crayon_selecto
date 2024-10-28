import { StyleSheet, Text, View } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 15,
    paddingHorizontal: 20,
    paddingBottom: 15,
    marginHorizontal: 18,
    marginBottom: 13,
    borderRadius: 15,
  },
  header: {
    fontFamily: "Poppins-SemiBold",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  backicon: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  appcontainer: {},
  row: {
    flexDirection: "row",
  },
  appbarText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 20,
    marginLeft: 5,
    paddingVertical: 23,
    color: "black",
  },
});
