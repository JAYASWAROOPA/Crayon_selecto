import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Appbar } from "../../components";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./docStyle";
export default function Document() {
  const navigation = useNavigation();
  const folders = [
    { id: "1", name: "Folder 01", documentCount: 4 },
    { id: "2", name: "Folder 02", documentCount: 2 },
    { id: "3", name: "Folder 03", documentCount: 4 },
    { id: "4", name: "Folder 04", documentCount: 2 },
  ];

  const documents = [
    { id: "1", name: "Document 02", date: "12/02/22" },
    { id: "2", name: "Document 03", date: "10/01/23" },
    { id: "3", name: "Document 04", date: "24/01/23" },
  ];

  const renderFolder = ({ item }) => (
    <TouchableOpacity
      style={styles.folderContainer}
      onPress={() => {
        navigation.navigate("Folder", { folderName: item.name });
      }}
    >
      <View>
        <Image
          source={require("../../assets/images/folder.png")}
          style={{ height: 25, width: 25 }}
        />
      </View>
      <View>
        <Text style={styles.folderName}>{item.name}</Text>
        <Text style={styles.folderDetails}>{item.documentCount} documents</Text>
      </View>
    </TouchableOpacity>
  );

  const renderDocument = ({ item }) => (
    <View style={styles.documentContainer}>
      <View
        style={{ padding: 10, backgroundColor: "#F0F3F6", borderRadius: 8 }}
      >
        <Image
          source={require("../../assets/images/file.png")}
          style={{ height: 25, width: 25 }}
        />
      </View>
      <View>
        <Text style={styles.documentName}>{item.name}</Text>
        <Text style={styles.documentDetails}>Created on {item.date}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView>
      <Appbar title="Documents" />
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={[styles.sectionTitle, { marginBottom: 10 }]}>
          04 Folders
        </Text>
        <FlatList
          data={folders}
          renderItem={renderFolder}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
          style={styles.list}
        />
        <Text style={[styles.sectionTitle, { marginVertical: 10 }]}>
          03 Documents
        </Text>
        <FlatList
          data={documents}
          renderItem={renderDocument}
          keyExtractor={(item) => item.id}
          style={styles.list}
        />
      </View>
    </ScrollView>
  );
}
