import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import {
  Appbar,
  Checklist,
  DesignContainer2,
  MembersModel,
  LogExpense,
  CommentSection,
} from "../../components";
export default function WorkSpace({ route }) {
  const { title } = route.params;

  return (
    <>
      <Appbar title={title.title} />
      <ScrollView>
        <DesignContainer2 />
        <Checklist />
        <LogExpense />
        <MembersModel title={"Users"} />
        <CommentSection />
      </ScrollView>
    </>
  );
}
