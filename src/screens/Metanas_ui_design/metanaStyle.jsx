import { StyleSheet } from "react-native";

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
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: "#000",
  },
  taskCountWrapper: {
    backgroundColor: "#D9E1F2",
    borderRadius: 50,
    paddingVertical: 2,
    paddingHorizontal: 6,
    justifyContent: "center",
    alignItems: "center",
    left: 20,
  },
  taskCount: {
    color: "#0C356A",
    fontWeight: "bold",
    fontFamily: "Poppins-SemiBold",
    fontSize: 13,
  },
});
