import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { CountDown } from 'react-native-countdown-component';
import { useNavigation } from '@react-navigation/native';

const CountdownTimer = () => {
  const [totalDuration, setTotalDuration] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    // Current date-time in the desired timezone (UTC +05:30)
    let currentDate = moment().utcOffset('+05:30').format('YYYY-MM-DD HH:mm:ss');
    
    // Expiry date-time (you can set your own expiry date)
    let expiryDate = '2024-12-31 23:59:59';  // Example expiry date-time
    
    // Calculate the difference between the current time and expiry time
    let duration = moment.duration(moment(expiryDate).diff(moment(currentDate)));
    
    // Extract hours, minutes, and seconds from the duration
    const hours = parseInt(duration.asHours());
    const minutes = parseInt(duration.minutes());
    const seconds = parseInt(duration.seconds());

    // Convert the duration into total seconds for the countdown timer
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;

    // Set the total duration in seconds
    setTotalDuration(totalSeconds);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Countdown Timer</Text>
        
        <CountDown
          until={totalDuration}
          timeToShow={['H', 'M', 'S']}
          onFinish={() => alert('Countdown Finished!')}
          onPress={() => alert('Timer Pressed!')}
          size={30}
          digitStyle={styles.digitStyle}
          digitTxtStyle={styles.digitTextStyle}
        />

        <View style={styles.navButtonsContainer}>
          <TouchableOpacity
            style={[styles.button, styles.navButton]}
            onPress={() => navigation.navigate('TimePicker')}
          >
            <Text style={styles.buttonText}>Go to Time Picker</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.navButton]}
            onPress={() => navigation.navigate('DatePicker')}
          >
            <Text style={styles.buttonText}>Go to Date Picker</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.navButton]}
            onPress={() => navigation.navigate('TimerStopwatch')}
          >
            <Text style={styles.buttonText}>Go to Timer Stopwatch</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  digitStyle: {
    backgroundColor: '#007BFF', // Background color for digits
    borderRadius: 8,
    marginHorizontal: 5,
  },
  digitTextStyle: {
    color: '#fff', // Text color for digits
    fontSize: 40, // Font size for countdown digits
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
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
});

export default CountdownTimer;
