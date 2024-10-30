// styleComment.js
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 8,
  },
  commentsList: {
    marginBottom: 8,
  },
  comment: {
    flexDirection: "row",
    marginVertical: 4,
  },
  avatar2: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  commentContent: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    padding: 8,
  },
  commentAuthor: {
    fontWeight: "bold",
  },
  commentTime: {
    fontSize: 12,
    color: "gray",
  },
  commentText: {
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 8,
  },
});
