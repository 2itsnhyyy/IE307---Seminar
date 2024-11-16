import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const TimePicker = () => {
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const navigation = useNavigation();
  const [selectedTime, setSelectedTime] = useState('');

  const showTimePicker = () => setTimePickerVisibility(true);
  const hideTimePicker = () => setTimePickerVisibility(false);

  const handleConfirm = (time) => {
    setSelectedTime(time.toLocaleTimeString());
    hideTimePicker();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Time Picker</Text>
      
      {/* Time Picker Button */}
      <TouchableOpacity style={styles.button} onPress={showTimePicker}>
        <Text style={styles.buttonText}>Show Time Picker</Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideTimePicker}
      />

      {/* Selected Time Display */}
      {selectedTime !== '' && <Text style={styles.selectedTime}>Selected Time: {selectedTime}</Text>}

      {/* Navigation Buttons */}
      <View style={styles.navButtonsContainer}>
        <TouchableOpacity
          style={[styles.button, styles.navButton]}
          onPress={() => navigation.navigate('DatePicker')}
        >
          <Text style={styles.buttonText}>Go to Date Picker</Text>
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
  selectedTime: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 10,
    color: '#333',
  },
});

export default TimePicker;
