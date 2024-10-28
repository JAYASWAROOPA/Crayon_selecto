import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styleMember";

export default function MembersModel({ title }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        },
      ]}
    >
      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={styles.membersContainer}>
          <Image
            source={require("../../assets/images/lady2.png")}
            style={styles.avatar}
          />
          <Image
            source={require("../../assets/images/men2.png")}
            style={styles.avatar}
          />
          <View style={styles.extraMembers}>
            <Text style={styles.extraText}>+3</Text>
          </View>
        </View>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{title}</Text>
            <Text style={styles.modalCount}>04 {title}</Text>

            <View style={styles.memberList}>
              <View style={styles.memberItem}>
                <Image
                  source={require("../../assets/images/men1.png")}
                  style={styles.memberImage}
                />
                <View>
                  <Text style={styles.memberName}>Mohammed</Text>
                  <Text style={styles.memberEmail}>
                    abdul_metanas@gmail.com
                  </Text>
                </View>
              </View>
              <View style={styles.memberItem}>
                <Image
                  source={require("../../assets/images/men2.png")}
                  style={styles.memberImage}
                />
                <View>
                  <Text style={styles.memberName}>Aaban</Text>
                  <Text style={styles.memberEmail}>
                    aaban_metanas@gmail.com
                  </Text>
                </View>
              </View>
              <View style={styles.memberItem}>
                <Image
                  source={require("../../assets/images/lady2.png")}
                  style={styles.memberImage}
                />
                <View>
                  <Text style={styles.memberName}>Hamza</Text>
                  <Text style={styles.memberEmail}>
                    hamza_metanas@gmail.com
                  </Text>
                </View>
              </View>
              <View style={styles.memberItem}>
                <Image
                  source={require("../../assets/images/emptymen.png")}
                  style={styles.memberImage}
                />
                <View>
                  <Text style={styles.memberName}>Abbas</Text>
                  <Text style={styles.memberEmail}>
                    abbas_metanas@gmail.com
                  </Text>
                </View>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}
            >
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
