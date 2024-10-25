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
    fontFamily: "Poppins-Medium",
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
    fontFamily: "Poppins-Medium",
    fontWeight: 'bold',
  },
  commentTime: {
    fontFamily: "Poppins-Mediyn",
    fontSize: 12,
    color: 'gray',
    marginBottom: 5,
  },
  commentText: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
  },
  input: {
    fontFamily: "Poppins-SemiBold",
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    padding: 10,
    marginTop: 10,
  },})