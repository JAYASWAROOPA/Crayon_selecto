import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import {
  Appbar,
  Status,
  DesignContainer1,
  MembersModel,
  AssetList,
} from "../../components";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./metanaStyle";
import Right from "../../assets/icons/right";
export default function Metanas_ui_design() {
  const navigation = useNavigation();
  return (
    <>
      <Appbar title={"Metanas UI Design"} />
      <ScrollView>
        <DesignContainer1 title={"Project Info"} />
        <Status />
        <MembersModel title={"Members"} />
        <AssetList />
        <TouchableOpacity
          style={styles.container}
          onPress={() => {
            navigation.navigate("Doccument");
          }}
        >
          <View style={styles.row}>
            <Text style={styles.text}>Documents</Text>
            <View style={styles.taskCountWrapper}>
              <Text style={styles.taskCount}>26</Text>
            </View>
            <View style={{ left: 180 }}>
              <Right />
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}
