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
  title: {
    fontSize: 18,
    marginRight: 10,
    color: "#000",
    fontFamily: "Poppins-SemiBold",
  },
  membersContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 20,
    marginLeft: -10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  extraMembers: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: "#E4E6EB",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -10,
  },
  extraText: {
    color: "#333",
    fontWeight: "600",
  },

  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "100%",
    height: 570,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "black",
  },
  modalCount: {
    fontSize: 14,
    color: "#888",
    marginBottom: 20,
  },
  memberList: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E6E6E6",
  },
  memberItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    borderColor: "#E6E6E6",
  },
  memberImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  memberName: {
    fontSize: 18,
    fontWeight: "600",
  },
  memberEmail: {
    fontSize: 14,
    color: "#888",
  },
  closeButton: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#0C356A",
  },
  closeText: {
    color: "#0C356A",
    fontSize: 18,
    fontWeight: "500",
  },
});
