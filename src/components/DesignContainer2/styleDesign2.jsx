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
        marginBottom: 8,
      },
      headerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
      },
      dateText: {
        fontSize: 14,
        color: '#888',
      },
      statusContainer: {
        alignItems: 'flex-end',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#0C356A',
        borderRadius: 5,
        width:120,
        padding:5,
        flexDirection:"row"
      },
      statusText: {
        fontSize: 14,
        color: '#0C356A',
        fontWeight: '600',
       
        paddingVertical: 2,
        paddingHorizontal: 8,
      },
      descriptionLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#333',
      },
      projectDescription: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
      },
      seeMoreText: {
        fontSize: 14,
        color: '#ff8c00',
        marginBottom: 10,
      },
      detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 3,
      },
      detailItem: {
        alignItems: 'flex-start',
      },
      detailLabel: {
        fontSize: 12,
        color: '#888',
        marginBottom: 2,
      },
      detailText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
      },
})