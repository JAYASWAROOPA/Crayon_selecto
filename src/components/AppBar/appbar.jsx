import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Left_arrow from "../../assets/icons/left_arrow";
import { styles } from "./stylesAppbar";
import { useNavigation } from "@react-navigation/native";
export default function Appbar({ title }) {
  const navigation = useNavigation();
  return (
    <View style={styles.appcontainer}>
      <StatusBar backgroundColor="#F0F3F6" barStyle={"dark-content"} />
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.backicon}
          onPress={() => navigation.goBack()}
        >
          <Left_arrow />
        </TouchableOpacity>
        <Text style={styles.appbarText}>{title}</Text>
      </View>
    </View>
  );
}
