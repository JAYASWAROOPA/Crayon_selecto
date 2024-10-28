import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Check_fill from "../../assets/icons/Check_filled";
import Check_outline from "../../assets/icons/Check_outline";
import { styles } from "./styleChecklist";
export default function Checklist() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      label: "Creating IA for project management",
      completed: false,
      bottom: true,
    },
    { id: 2, label: "Flow chart ideation", completed: false, bottom: true },
    { id: 3, label: "UI layout setup", completed: true, bottom: true },
    { id: 4, label: "Basic UI components", completed: false, bottom: false },
  ]);

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <View style={styles.container}>
      <View style={[styles.headerContainer]}>
        <Text style={styles.headerText}>Checklist</Text>
        <View style={[styles.taskCount1]}>
          <Text style={styles.taskCountText}>
            {tasks.length.toString().padStart(2, "0")}
          </Text>
        </View>
      </View>

      {tasks.map((task) => (
        <TouchableOpacity
          key={task.id}
          style={[styles.taskItem, { borderBottomWidth: task.bottom ? 1 : 0 }]}
          onPress={() => toggleTask(task.id)}
        >
          <View style={styles.checkbox}>
            {task.completed ? <Check_fill /> : <Check_outline />}
          </View>
          <Text>{task.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
