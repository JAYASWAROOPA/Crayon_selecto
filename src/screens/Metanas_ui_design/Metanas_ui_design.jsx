import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Appbar from '../../components/Appbar';
import Status from '../../components/Status';
import Designcontainer from '../../components/Designcontainer1';
import MembersModel from '../../components/Membersmodel';
import AssetsList from '../../components/AssetsList';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from './Metana_style';
import Right from '../../assets/icons/right';
export default function Metanas_ui_design() {
  return (
    <>
    <Appbar title={"Metanas UI Design"} />
    <ScrollView>
      <Designcontainer title={"Project Info"} />
      <Status />
      <MembersModel title={"Members"}/>
      <AssetsList />
      <TouchableOpacity style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.text}>Documents</Text>
          <View style={styles.taskCountWrapper}>
            <Text style={styles.taskCount}>26</Text>
          </View>
          <View style={{left:180}}><Right/></View>
        </View>
      </TouchableOpacity>
    </ScrollView>
    </>
    
  );
}
