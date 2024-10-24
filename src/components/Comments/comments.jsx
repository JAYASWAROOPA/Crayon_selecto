import React from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import { styles } from './styleComment';
const CommentSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comments</Text>
      
      <View style={styles.comment}>
        <Image
          source={require('../../assets/images/boy1.png')}
          style={styles.avatar2}
        />
        <View style={styles.commentContent}>
          <View style={{flexDirection:"row",justifyContent:"space-between",paddingBottom:8}}>
          <Text style={styles.commentAuthor}>Hamza</Text>
          <Text style={styles.commentTime}>1 day ago</Text>
          </View>
          <Text style={styles.commentText}>
            harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum nobis.
          </Text>
        </View>
      </View>
      
      <View style={styles.comment}>
        <Image
          source={require('../../assets/images/men2.png')}
          style={styles.avatar2}
        />
        <View style={styles.commentContent}>
        <View style={{flexDirection:"row",justifyContent:"space-between",paddingBottom:8}}>
          <Text style={styles.commentAuthor}>Mohammed</Text>
          <Text style={styles.commentTime}>12 hrs ago</Text>
          </View>
          <Text style={styles.commentText}>Sure, Thanks</Text>
        </View>
      </View>
      
      <TextInput 
        style={styles.input}
        placeholder="Add comments"
      />
    </View>
  );
};

export default CommentSection;
