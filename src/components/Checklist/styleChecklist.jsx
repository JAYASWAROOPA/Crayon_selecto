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
      headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
      },
      headerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
      },
      taskCountText: {
        fontSize: 12,
        color: '#1E3A8A',
        fontWeight: 'bold',
      },
      taskItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        borderBottomColor:'lightgrey',
        paddingBottom:20,
        paddingTop:5
      },
      checkbox: {
        marginRight: 10,
      },
      taskLabel: {
        fontSize: 14,
        color: '#333',
      },
      taskLabelCompleted: {
        textDecorationLine: 'line-through',
        color: '#999',
      },


})