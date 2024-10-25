export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f7f7f7',
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginHorizontal: 20,
        marginBottom: 15,
        borderRadius: 12,
        borderColor: '#e0e0e0',
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        width: '90%',
        padding: 25,
        backgroundColor: '#fff',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    title: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 20,
        color: '#333',
    },
    label: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 8,
        color: '#555',
    },
    input: {
        fontFamily: "Poppins-SemiBold",
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        backgroundColor: '#fafafa',
        color: '#333',
    },
    datePicker: {
        fontFamily: "Poppins-SemiBold",
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 15,
        justifyContent: 'center',
        marginBottom: 15,
        backgroundColor: '#fafafa',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    rowItem: {
        flex: 0.48,
    },
    picker: {
        fontFamily: "Poppins-SemiBold",
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 12,
        backgroundColor: '#fafafa',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    checkbox: {
        fontFamily: "Poppins-SemiBold",
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        marginRight: 10,
        borderRadius: 3,
        backgroundColor: '#fafafa',
    },
    checkboxLabel: {
         fontFamily: "Poppins-SemiBold",
        fontSize: 14,
        color: '#555',
    },
    textArea: {
        fontFamily: "Poppins-SemiBold",
        height: 80,
        textAlignVertical: 'top',
    },
    uploadButton: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 12,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        backgroundColor: '#fafafa',
    },
    uploadButtonText: {
        fontFamily: "Poppins-SemiBold",
        color: '#4A90E2',
        fontWeight: '600',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cancelButton: {
        borderWidth: 1,
        borderColor: '#4A90E2',
        borderRadius: 12,
        padding: 15,
        flex: 0.48,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancelButtonText: {
        color: '#4A90E2',
        fontWeight: '600',
        fontSize: 16,
    },
    saveButton: {
        backgroundColor: '#4A90E2',
        borderRadius: 12,
        padding: 15,
        flex: 0.48,
        alignItems: 'center',
        justifyContent: 'center',
    },
    saveButtonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
});
