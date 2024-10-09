import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DatePicker = ({ label, selectedDate, onDateChange }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    onDateChange(date);
    hideDatePicker();
  };

  const formatDate = (date) => {
    return date ? date.toDateString() : "Select a date";
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity onPress={showDatePicker} style={styles.dateButton}>
        <Text style={styles.dateButtonText}>{formatDate(selectedDate)}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        date={selectedDate || new Date()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
        marginBottom: 0,
      marginHorizontal:5,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 0,
  },
  dateButton: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    padding: 10,
  },
  dateButtonText: {
    fontSize: 16,
  },
});

export default DatePicker;
