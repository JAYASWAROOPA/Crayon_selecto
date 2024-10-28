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
import { Provider } from "react-redux";
import store, { persistor } from "../../../store";
import { PersistGate } from "redux-persist/integration/react";
export default function WorkSpace({ route }) {
  const { title } = route.params;

  return (
    <>
      <Appbar title={title.title} />
      <ScrollView>
        <DesignContainer2 />
        <Checklist />
        <Provider store={store}>
            <LogExpense />
        </Provider>
        <MembersModel title={"Users"} />
        <CommentSection />
      </ScrollView>
    </>
  );
}
