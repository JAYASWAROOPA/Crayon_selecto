import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Right from '../assets/icons/right';
import Down from '../assets/icons/down';
import { useNavigation } from '@react-navigation/native';
import { styles } from './Styles1';

export default function Status() {
  const navigation = useNavigation();
  const handleTaskClick = (title) => {
    navigation.navigate('WorkSpace', { title }); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Task details</Text>
        <View style={styles.taskCountWrapper}>
          <Text>03</Text>
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>All </Text>
          <Down />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => handleTaskClick({ title: 'Wireframes'})} style={styles.taskRow}>
        <View style={styles.taskInfo}>
          <Text style={styles.taskTitle}>Wireframes</Text>
          <Text style={styles.taskDetails}>ID 0214 • 05/09/23</Text>
        </View>
        <View style={styles.taskStatus}>
          <Text style={styles.statusTextPending}>Yet to start</Text>
          <Right />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleTaskClick({ title: 'Inspection'})} style={styles.taskRow}>
        <View style={styles.taskInfo}>
          <Text style={styles.taskTitle}>Inspection</Text>
          <Text style={styles.taskDetails}>ID 0212 • 04/09/23</Text>
        </View>
        <View style={styles.taskStatus}>
          <Text style={styles.statusTextInProgress}>In-progress</Text>
          <Right />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleTaskClick({ title: 'Base layout' })} style={styles.taskRownoborder}>
        <View style={styles.taskInfo}>
          <Text style={styles.taskTitle}>Base layout</Text>
          <Text style={styles.taskDetails}>ID 0201 • 02/09/23</Text>
        </View>
        <View style={styles.taskStatus}>
          <Text style={styles.statusTextCompleted}>Completed</Text>
          <Right />
        </View>
      </TouchableOpacity>
    </View>
  );
}
