import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function TaskDetails() {
  const details = [
    {
      id: "1",
      name: "Wireframe",
      status: "Yet to start",
      color: "#D9534F",
      backgroundColor: "#F9C2C3",
    },
    {
      id: "2",
      name: "Inspection",
      status: "In-progress",
      color: "#F0AD4E",
      backgroundColor: "#FADFC6",
    },
    {
      id: "3",
      name: "Base layout",
      status: "Completed",
      color: "#5CB85C",
      backgroundColor: "#D0F0C0",
    },
  ];

  return (
    <View style={styles.container}>
      {details.map((task) => (
        <TouchableOpacity
          key={task.id}
          style={[styles.taskRow, { backgroundColor: task.backgroundColor }]}
        >
          <View style={styles.taskInfo}>
            <Text style={styles.taskTitle}>{task.name}</Text>
            <Text style={[styles.taskStatus, { color: task.color }]}>
              {task.status}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  taskRow: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  taskInfo: {
    flexDirection: "column",
  },
  taskTitle: {
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    color: "#333",
  },
  taskStatus: {
    marginTop: 5,
    fontSize: 14,
  },
});
