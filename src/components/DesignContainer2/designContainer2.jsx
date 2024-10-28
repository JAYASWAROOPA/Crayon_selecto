import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Down from "../../assets/icons/down";
import { styles } from "./styleDesign2";
export default function DesignContainer2() {
  const [showFullText, setShowFullText] = useState(false);

  const toggleDescription = () => {
    setShowFullText(!showFullText);
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Task Info • </Text>
          <Text style={styles.dateText}> 05/09/23</Text>
        </View>
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>Yet to start</Text>
          <Down />
        </View>
      </View>
      <View>
        <Text style={styles.descriptionLabel}>Description</Text>
        <Text style={styles.projectDescription}>
          {showFullText
            ? "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
            : "At vero eos et accusamus et iusto odio dignissimos ducimus qui blandi..."}
        </Text>
        <TouchableOpacity onPress={toggleDescription}>
          <Text style={styles.seeMoreText}>
            {showFullText ? "See less" : "See more"}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>ID</Text>
          <Text style={styles.detailText}>ID 0213</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Type</Text>
          <Text style={styles.detailText}>General</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Priority</Text>
          <Text style={styles.detailText}>Medium</Text>
        </View>
      </View>
    </View>
  );
}
