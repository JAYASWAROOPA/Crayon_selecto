import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';  
import { Appbar } from '../../components';
import { styles } from './folderPage_style';
const documents = [
  { id: '1', name: 'Document 02', date: '12/02/22' },
  { id: '2', name: 'Document 03', date: '10/01/23' },
  { id: '3', name: 'Document 04', date: '24/01/23' },
  { id: '4', name: 'Document 05', date: '12/02/23' },
];

export default function FolderPage() {
  const route = useRoute();
  const { folderName } = route.params;  

  const renderDocument = ({ item }) => (
    <View style={styles.documentContainer}>
      <View style={styles.iconContainer}>
        <Image source={require("../../assets/images/file.png")} style={styles.icon} />
      </View>
      <View style={styles.documentInfo}>
        <Text style={styles.documentName}>{item.name}</Text>
        <Text style={styles.documentDetails}>Created on {item.date}</Text>
      </View>
    </View>
  );

  return (
    <>
    <Appbar title={folderName} />
    <View style={styles.container}>
      
      <FlatList
        data={documents}
        renderItem={renderDocument}
        keyExtractor={(item) => item.id}
      />
    </View>
    </>
    
  );
}

