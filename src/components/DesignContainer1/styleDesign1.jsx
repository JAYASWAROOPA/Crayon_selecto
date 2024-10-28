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
  headertext: {
    fontFamily: "Poppins-SemiBold",
    color: "black",
    fontSize: 18,
  },
  descriptionText: {
    fontSize: 14,
    color: "#999",
    marginTop: 10,
  },
  projectDescription: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  seeMoreText: {
    fontFamily: "Poppins-Medium",
    color: "#FFA500",
    fontSize: 14,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  dateColumn: {
    flex: 1,
  },
  statusColumn: {
    flex: 1.5,
    alignItems: "flex-end",
  },
  dateTitle: {
    fontFamily: "Poppins-Medium",
    fontSize: 12,
    color: "#999",
  },
  dateTitle2: {
    fontFamily: "Poppins-Medium",
    fontSize: 12,
    color: "#999",
    right: 80,
  },
  dateText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginTop: 2,
  },
  progressWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  progressBar: {
    width: 80,
    height: 10,
    borderRadius: 40,
  },
  percentageText: {
    fontFamily: "Poppins-SemiBold",
    marginLeft: 10,
    color: "#333",
    fontWeight: "600",
  },
});
