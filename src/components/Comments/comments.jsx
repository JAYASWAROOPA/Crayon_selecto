import React, { useState } from "react";
import { View, Text, TextInput, Image, FlatList } from "react-native";
import { useCommentStore } from "./commentStore"; 
import { styles } from "./styleComment"; 

const CommentSection = () => {
  const [newComment, setNewComment] = useState("");
  const { comments, addComment } = useCommentStore(); 
  const handleAddComment = () => {
    if (newComment.trim()) {
      addComment(newComment); 
      setNewComment("");
    }
  };

  const renderComment = ({ item }) => (
    <View style={styles.comment}>
      <Image source={item.avatar} style={styles.avatar2} />
      <View style={styles.commentContent}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingBottom: 8 }}>
          <Text style={styles.commentAuthor}>{item.author}</Text>
          <Text style={styles.commentTime}>{item.time}</Text>
        </View>
        <Text style={styles.commentText}>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comments</Text>

      <FlatList
        data={comments}
        renderItem={renderComment}
        keyExtractor={(item) => item.id.toString()}
        style={styles.commentsList}
      />

      <TextInput
        style={styles.input}
        placeholder="Add comments"
        value={newComment}
        onChangeText={setNewComment}
        onSubmitEditing={handleAddComment} 
      />
    </View>
  );
};

export default CommentSection;
