import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
} from "react-native";
import { styles } from "./styleLog";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function LogExpense() {
  const [modalVisible, setModalVisible] = useState(false);
  const [expenses, setExpenses] = useState([]);

  const [expenseName, setExpenseName] = useState("");
  const [date, setDate] = useState(new Date());
  const [currency, setCurrency] = useState("AED");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
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

      setExpenseName("");
      setAmount("");
      setCategory("");
      setDescription("");
      setDate(new Date());
    } else {
      alert("Please fill out all required fields.");
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
              borderBottomColor: "#E6E6E6",
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
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Create expense</Text>
            <View style={styles.viewbox}>
              <Text style={styles.label}>Expense name *</Text>
              <TextInput
                style={styles.input}
                placeholder="Expense 01"
                value={expenseName}
                onChangeText={setExpenseName}
              />
            </View>

            <View style={styles.viewbox}>
              <Text style={styles.label}>Date *</Text>
              <TouchableOpacity
                onPress={() => setShowDatePicker(true)}
                style={styles.datePicker}
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
            </View>

            <View style={styles.row}>
              <View style={styles.rowItem}>
                <Text style={styles.label}>Currency *</Text>
                <Picker
                  selectedValue={currency}
                  onValueChange={(itemValue) => setCurrency(itemValue)}
                  style={styles.picker}
                >
                  <Picker.Item label="AED" value="AED" />
                  <Picker.Item label="USD" value="USD" />
                </Picker>
              </View>
              <View style={styles.rowItem}>
                <Text style={styles.label}>Amount *</Text>
                <TextInput
                  style={styles.input}
                  placeholder="2145"
                  keyboardType="numeric"
                  value={amount}
                  onChangeText={setAmount}
                />
              </View>
            </View>
            <View style={styles.viewbox}>
              <Text style={styles.label}>Category *</Text>
              <Picker
                selectedValue={category}
                onValueChange={(itemValue) => setCategory(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="Select category" value="" />
                <Picker.Item label="Travel" value="travel" />
                <Picker.Item label="Food" value="food" />
              </Picker>
            </View>
<View style={[styles.viewbox,{}]}>
<Text style={styles.label}>Description</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Description"
              multiline={true}
              value={description}
              onChangeText={setDescription}
            />
</View>
            

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
