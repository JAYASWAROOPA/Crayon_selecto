import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

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
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 5,
      },
      headerTitle: {
        fontFamily:"Poppins-SemiBold",
        fontSize: 18,
        color: '#333',
      },
      taskCountWrapper: {
        backgroundColor: '#D9E1F2',
        borderRadius: 50,
        paddingVertical: 2,
        paddingHorizontal: 6,
        justifyContent: 'center',
        alignItems: 'center',
        right:40
      },
      filterButton: {
        borderColor: '#ccc',
        borderWidth: 1,
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
      },
      filterButtonText: {
        color: '#333',
      },
      taskRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingBottom:10,
        borderBottomWidth: 1,
        borderBottomColor: '#E6E6E6',
      },
      taskRownoborder:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
      },
      taskInfo: {
        flexDirection: 'column',
      },
      taskTitle: {
        fontSize: 16,
        fontFamily:"Poppins-SemiBold",
        color: '#4E585E',
      },
      taskDetails: {
        color: '#999',
        marginTop: 10,
        fontFamily:'Poppins-Medium'
      },
      taskStatus: {
        flexDirection:"row",
        gap:10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      statusTextPending: {
        backgroundColor: '#F9C2C3',
        color: '#D9534F',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
      },
      statusTextInProgress: {
        backgroundColor: '#FADFC6',
        color: '#F0AD4E',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
      },
      statusTextCompleted: {
        backgroundColor: '#D0F0C0',
        color: '#5CB85C',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
      },
})