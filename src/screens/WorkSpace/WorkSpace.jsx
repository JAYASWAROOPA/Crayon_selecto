import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Appbar from '../../components/Appbar';
import DesignContainer2 from '../../components/DesignContainer2';
import Checklist from '../../components/Checklist';
import LogExpense from '../../components/Log_expense';
import MembersModel from '../../components/Membersmodel';
import { ScrollView } from 'react-native-gesture-handler';
import CommentSection from '../../components/Comments';

export default function WorkSpace({ route }) {
  const { title } = route.params; 

  return (
    <ScrollView>
    <Appbar title={title.title}/>
    <DesignContainer2/>
    <Checklist/>
    <LogExpense/>
    <MembersModel title={'Users'}/>
    <CommentSection/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
