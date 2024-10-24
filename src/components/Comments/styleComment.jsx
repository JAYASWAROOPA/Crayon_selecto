import { StyleSheet, Text, View } from 'react-native'


export const styles = StyleSheet.create({
   container: {
        backgroundColor: 'white',
        paddingTop: 15,
        paddingHorizontal:20,
        paddingBottom:15,
        marginHorizontal: 18,
        marginBottom:13,
        borderRadius:15,
       
      },
  comment: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  avatar2: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  title:{
    fontSize:18,
    fontFamily:"Poppins-SemiBold",
    color:"black"
  },
  commentContent: {
    flex: 1,
  },
  commentAuthor: {
    fontWeight: 'bold',
  },
  commentTime: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 5,
  },
  commentText: {
    fontSize: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    padding: 10,
    marginTop: 10,
  },})