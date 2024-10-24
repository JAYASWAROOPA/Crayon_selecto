import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import React from 'react';
import Left_arrow from '../assets/icons/left_arrow';
import { useNavigation } from '@react-navigation/native';
export default function Appbar({ title}) {
  const navigation=useNavigation()
  return (
    <View style={styles.appcontainer}>
      <StatusBar backgroundColor='#F0F3F6' barStyle={'dark-content'} />
      <View style={styles.row}>
        <TouchableOpacity style={styles.backicon} onPress={()=>navigation.goBack()}>
          <Left_arrow />
        </TouchableOpacity>
        <Text style={styles.appbarText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backicon: {
    paddingVertical:20,
    paddingHorizontal:20
  },
  appcontainer:{
  },
  row: {
    flexDirection: 'row',
  },
  appbarText: {
    fontFamily: 'Poppins-SemiBold', 
    fontSize: 20,
    marginLeft: 5,
    paddingVertical:23,
    color:'black'
  },
});
