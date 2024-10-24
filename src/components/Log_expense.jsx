import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TextInput } from 'react-native';
import { styles } from './Styles1';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function LogExpense() {
    const [modalVisible, setModalVisible] = useState(false);
    const [expenses, setExpenses] = useState([

    ]);

    const [expenseName, setExpenseName] = useState('');
    const [date, setDate] = useState(new Date());
    const [currency, setCurrency] = useState('AED');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setDate(currentDate);
    };

    const handleSave = () => {
        if (expenseName && amount && category) {
            const newExpense = {
                id: expenses.length + 1,
                name: expenseName,
                date: date.toLocaleDateString(),
                amount: `${amount} ${currency}`,
                bottom: true,
            };

            setExpenses([...expenses, newExpense]);
            setModalVisible(false);

            setExpenseName('');
            setAmount('');
            setCategory('');
            setDescription('');
            setDate(new Date());
        } else {
            alert('Please fill out all required fields.');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Log expense</Text>
                <View style={styles.taskCount2}>
                    <Text style={styles.taskCountText}>{expenses.length}</Text>
                </View>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <View style={styles.addButton}>
                        <Text style={styles.plusText}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>

            {expenses.map((expense, index) => (
                <View
                    key={expense.id}
                    style={[
                        styles.expenseItem,
                        {
                            borderBottomWidth: index < expenses.length - 1 ? 1 : 0,
                            borderBottomColor: '#E6E6E6',
                        },
                    ]}
                >
                    <Text style={styles.expenseName}>
                        {expense.name} • {expense.date} • {expense.amount}
                    </Text>
                </View>
            ))}

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={modalStyles.modalOverlay}>
                    <View style={modalStyles.modalContainer}>
                        <Text style={modalStyles.modalTitle}>Create expense</Text>

                        <Text style={modalStyles.label}>Expense name *</Text>
                        <TextInput
                            style={modalStyles.input}
                            placeholder="Expense 01"
                            value={expenseName}
                            onChangeText={setExpenseName}
                        />

                        <Text style={modalStyles.label}>Date *</Text>
                        <TouchableOpacity
                            onPress={() => setShowDatePicker(true)}
                            style={modalStyles.datePicker}
                        >
                            <Text>{date.toLocaleDateString()}</Text>
                        </TouchableOpacity>
                        {showDatePicker && (
                            <DateTimePicker
                                value={date}
                                mode="date"
                                display="default"
                                onChange={handleDateChange}
                            />
                        )}

                        <View style={modalStyles.row}>
                            <View style={modalStyles.rowItem}>
                                <Text style={modalStyles.label}>Currency *</Text>
                                <Picker
                                    selectedValue={currency}
                                    onValueChange={(itemValue) => setCurrency(itemValue)}
                                    style={modalStyles.picker}
                                >
                                    <Picker.Item label="AED" value="AED" />
                                    <Picker.Item label="USD" value="USD" />
                                    
                                </Picker>
                            </View>
                            <View style={modalStyles.rowItem}>
                                <Text style={modalStyles.label}>Amount *</Text>
                                <TextInput
                                    style={modalStyles.input}
                                    placeholder="2145"
                                    keyboardType="numeric"
                                    value={amount}
                                    onChangeText={setAmount}
                                />
                            </View>
                        </View>

                        {/* Category */}
                        <Text style={modalStyles.label}>Category *</Text>
                        <Picker
                            selectedValue={category}
                            onValueChange={(itemValue) => setCategory(itemValue)}
                            style={modalStyles.picker}
                        >
                            <Picker.Item label="Select category" value="" />
                            <Picker.Item label="Travel" value="travel" />
                            <Picker.Item label="Food" value="food" />
                            {/* Add more categories here */}
                        </Picker>

                        {/* Description */}
                        <Text style={modalStyles.label}>Description</Text>
                        <TextInput
                            style={[modalStyles.input, modalStyles.textArea]}
                            placeholder="Description"
                            multiline={true}
                            value={description}
                            onChangeText={setDescription}
                        />

                        {/* Buttons: Cancel & Save */}
                        <View style={modalStyles.buttonContainer}>
                            <TouchableOpacity
                                style={modalStyles.cancelButton}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={modalStyles.cancelButtonText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={modalStyles.saveButton} onPress={handleSave}>
                                <Text style={modalStyles.saveButtonText}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const modalStyles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
      height:"90%",
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 30,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
    },
    datePicker: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 10,
        justifyContent: 'center',
        marginBottom: 15,
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
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
    },
    textArea: {
        height: 80,
        textAlignVertical: 'top',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cancelButton: {
        borderWidth: 1,
        borderColor: '#4A90E2',
        borderRadius: 5,
        padding: 15,
        flex: 0.48,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancelButtonText: {
        color: '#4A90E2',
        fontWeight: 'bold',
    },
    saveButton: {
        backgroundColor: '#4A90E2',
        borderRadius: 5,
        padding: 15,
        flex: 0.48,
        alignItems: 'center',
        justifyContent: 'center',
    },
    saveButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
