import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    padding: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 8,
    color: "#333333",
  },
  folderContainer: {
    gap: 10,
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 8,
    margin: 8,
    flex: 1,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    height: 110,
  },
  folderIcon: {
    width: 40,
    height: 40,
    backgroundColor: "#FFC107",
    borderRadius: 8,
    marginRight: 16,
  },
  folderName: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333333",
  },
  folderDetails: {
    fontSize: 12,
    color: "#888888",
  },
  documentContainer: {
    gap: 15,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  documentIcon: {
    width: 40,
    height: 40,
    backgroundColor: "#007BFF",
    borderRadius: 8,
    marginRight: 16,
  },
  documentName: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333333",
  },
  documentDetails: {
    marginTop: 10,
    fontSize: 12,
    color: "grey",
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
});
