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
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 5,
      },

      ////////////////////
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
      // taskCount: {
      //   color: '#0C356A',
      //   fontWeight: 'bold',
      // },
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
      headertext:{
        fontFamily:"Poppins-SemiBold",
        color:"black",
        fontSize:18
      },
      descriptionText: {
        fontSize: 14,
        color: '#999',
        marginTop: 10,
      },
      projectDescription: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
      },
      seeMoreText: {
        color: '#FFA500',
        fontSize: 14,
      },
      infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
      },
      dateColumn: {
        flex: 1,
      },
      statusColumn: {
        flex: 1.5,
        alignItems: 'flex-end',
      },
      dateTitle: {
        fontSize: 12,
        color: '#999',
      },
      dateTitle2: {
        fontSize: 12,
        color: '#999',
        right:80
      },
      dateText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
        marginTop: 2,
      },
      progressWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
      },
      progressBar: {
        width: 80,
        height: 10,
        borderRadius: 40,
      },
      percentageText: {
        marginLeft: 10,
        color: '#333',
        fontWeight: '600',
      },



      ////////////////////////
      
      membersContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      avatar: {
        width: 35,
        height: 35,
        borderRadius: 20, 
        marginLeft: -10, 
        borderWidth: 1,
        borderColor: '#fff',
      },
      extraMembers: {
        width: 35,
        height: 35,
        borderRadius: 20,
        backgroundColor: '#E4E6EB',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: -10,
      },
      extraText: {
        color: '#333',
        fontWeight: '600',
      },


      //////////////////
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

      /////////////////

      modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '100%',
        height:570
      },
      modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color:"black"
      },
      modalCount: {
        fontSize: 14,
        color: '#888',
        marginBottom: 20,
      },
      memberList: {
        marginBottom: 20,
        borderBottomWidth:1,
        borderBottomColor:"#E6E6E6"
      },
      memberItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        borderWidth:1,
        borderRadius:10,
        padding:15,
        borderColor:"#E6E6E6"
      },
      memberImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
      },
      memberName: {
        fontSize: 18,
        fontWeight: '600',
      },
      memberEmail: {
        fontSize: 14,
        color: '#888',
      },
      closeButton: {
        padding: 10,
        borderRadius: 5,
        borderWidth:1,
        height:60,
        alignItems: 'center',
        justifyContent:"center",
        borderColor:"#0C356A"
      },
      closeText: {
        color: '#0C356A',
        fontSize: 18,
        fontWeight:"500"
      },
      /////////////////
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


      ////////////////////
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

      //////////////

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
      taskCount1: {
        backgroundColor: '#E0E7FF',
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 2,
        marginRight: 196,
      },
      taskCount2: {
        backgroundColor: '#E0E7FF',
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 2,
        marginRight: 130,
      },
      taskCountText: {
        fontSize: 12,
        color: '#1E3A8A',
        fontWeight: 'bold',
      },
      addButton: {
        backgroundColor: '#fff',
        borderColor: '#F55353',
        borderWidth: 2,
        borderRadius: 50,
        paddingHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center',
      },
      plusText: {
        color: '#F55353',
        fontSize: 20,
        fontWeight: 'bold',
      },
      expenseItem: {
        paddingVertical: 8,
      },
      expenseName: {
        fontSize: 14,
        color: '#555',
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
  },
})