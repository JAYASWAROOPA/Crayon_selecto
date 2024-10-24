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
      title: {
        fontSize: 18,
        marginRight: 10,
        color: '#000',
        fontFamily:"Poppins-SemiBold"
      },
      scrollContainer: {
        flexDirection: 'row',
      },
      assetContainer: {
        alignItems: 'center',
        marginRight: 15,
        backgroundColor:'#F0F3F6',
        borderRadius:10,
        width:100,
        height:100,
        padding:1,
        alignItems:"center",
        justifyContent:"center"
      },
      assetImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
        backgroundColor: '#E4E6EB', 
      },
      assetName: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: '500',
        color: '#333',
      },
})