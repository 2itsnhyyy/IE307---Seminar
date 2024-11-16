import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const DatePicker = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const navigation = useNavigation();

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  const handleConfirm = (date) => {
    setSelectedDate(date.toLocaleDateString());
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Date Picker</Text>
      
      {/* Date Picker Button */}
      <TouchableOpacity style={styles.button} onPress={showDatePicker}>
        <Text style={styles.buttonText}>Show Date Picker</Text>
      </TouchableOpacity>
      
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      {/* Selected Date Text */}
      {selectedDate !== '' && <Text style={styles.selectedDate}>Selected Date: {selectedDate}</Text>}

      {/* Navigation Buttons */}
      <View style={styles.navButtonsContainer}>
        <TouchableOpacity
          style={[styles.button, styles.navButton]}
          onPress={() => navigation.navigate('TimePicker')}
        >
          <Text style={styles.buttonText}>Go to Time Picker</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.navButton]}
          onPress={() => navigation.navigate('CountdownTimer')}
        >
          <Text style={styles.buttonText}>Go to Countdown Timer</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.navButton]}
          onPress={() => navigation.navigate('TimerStopwatch')}
        >
          <Text style={styles.buttonText}>Go to Timer Stopwatch</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff', // Light blue background
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  navButtonsContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  navButton: {
    width: '80%',
    marginBottom: 15,
  },
  selectedDate: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 10,
    color: '#333',
  },
});

export default DatePicker;
