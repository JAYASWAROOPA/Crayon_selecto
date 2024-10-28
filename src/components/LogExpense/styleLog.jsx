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
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  comment: {
    flexDirection: "row",
    marginBottom: 10,
  },
  avatar2: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  commentContent: {
    flex: 1,
  },
  commentAuthor: {
    fontWeight: "bold",
  },
  commentTime: {
    fontSize: 12,
    color: "gray",
    marginBottom: 5,
  },
  commentText: {
    fontSize: 14,
  },
  taskCount1: {
    backgroundColor: "#E0E7FF",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginRight: 196,
  },
  taskCount2: {
    backgroundColor: "#E0E7FF",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginRight: 130,
  },
  taskCountText: {
    fontSize: 12,
    color: "#1E3A8A",
    fontWeight: "bold",
  },
  addButton: {
    backgroundColor: "#fff",
    borderColor: "#F55353",
    borderWidth: 2,
    borderRadius: 50,
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  plusText: {
    color: "#F55353",
    fontSize: 20,
    fontWeight: "bold",
  },
  expenseItem: {
    paddingVertical: 8,
  },
  expenseName: {
    fontSize: 14,
    color: "#555",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    height: "90%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 30,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  label: {
    fontSize: 12,
    left: 5,
    color: "grey",
  },
  viewbox: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    paddingTop: 13,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  datePicker: {
    padding: 8,
    justifyContent: "center",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  rowItem: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    flex: 0.48,
    paddingTop: 13,
    paddingHorizontal: 15,
  },
  picker: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
  },
  input: {
    fontSize: 13,
    fontWeight: "500",
  },
  textArea: {
    top: 8,
    height: 60,
    textAlignVertical: "top",
  },
  buttonContainer: {
    paddingTop: 20,
    top: 70,
    borderTopWidth: 1,
    borderTopColor: "lightgrey",
    justifyContent: "flex-end",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cancelButton: {
    borderWidth: 1,
    borderColor: "#4A90E2",
    borderRadius: 10,
    padding: 15,
    flex: 0.48,
    alignItems: "center",
    justifyContent: "center",
  },
  cancelButtonText: {
    color: "#4A90E2",
    fontWeight: "bold",
  },
  saveButton: {
    backgroundColor: "#4A90E2",
    borderRadius: 10,
    padding: 15,
    flex: 0.48,
    alignItems: "center",
    justifyContent: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
