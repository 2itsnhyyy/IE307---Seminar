import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';

const TimerStopwatch = () => {
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);
  const [timerDuration, setTimerDuration] = useState(90000); // 90 seconds
  const navigation = useNavigation();

  const options = {
    container: {
      backgroundColor: '#f0f8ff', // Light blue background
      padding: 5,
      borderRadius: 5,
      width: 200,
      alignItems: 'center',
    },
    text: {
      fontSize: 25,
      color: '#333',
    },
  };

  // Reusable function to handle start/stop and reset logic
  const handleStartStop = (isStart, setIsStart, setReset) => {
    setIsStart(!isStart);
    setReset(false);
  };

  const handleReset = (setIsStart, setReset) => {
    setIsStart(false);
    setReset(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Timer Stopwatch</Text>

      {/* Stopwatch Section */}
      <View style={styles.sectionStyle}>
        <Stopwatch
          laps
          msecs
          start={isStopwatchStart}
          reset={resetStopwatch}
          options={options}
          getTime={(time) => console.log(time)} // Debugging or display purposes
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleStartStop(isStopwatchStart, setIsStopwatchStart, setResetStopwatch)}>
          <Text style={styles.buttonText}>
            {!isStopwatchStart ? 'START' : 'STOP'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleReset(setIsStopwatchStart, setResetStopwatch)}>
          <Text style={styles.buttonText}>RESET</Text>
        </TouchableOpacity>
      </View>

      {/* Timer Section */}
      <View style={styles.sectionStyle}>
        <Timer
          totalDuration={timerDuration}
          msecs
          start={isTimerStart}
          reset={resetTimer}
          options={options}
          handleFinish={() => alert('Custom Completion Function')}
          getTime={(time) => console.log(time)} // Debugging or display purposes
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleStartStop(isTimerStart, setIsTimerStart, setResetTimer)}>
          <Text style={styles.buttonText}>
            {!isTimerStart ? 'START' : 'STOP'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleReset(setIsTimerStart, setResetTimer)}>
          <Text style={styles.buttonText}>RESET</Text>
        </TouchableOpacity>
      </View>

      {/* Navigation Buttons */}
      <View style={styles.navButtonsContainer}>
        <TouchableOpacity
          style={[styles.button, styles.navButton]}
          onPress={() => navigation.navigate('TimePicker')}>
          <Text style={styles.buttonText}>Go to Time Picker</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.navButton]}
          onPress={() => navigation.navigate('CountdownTimer')}>
          <Text style={styles.buttonText}>Go to Countdown Timer</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.navButton]}
          onPress={() => navigation.navigate('DatePicker')}>
          <Text style={styles.buttonText}>Go to Date Picker</Text>
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
  sectionStyle: {
    marginVertical: 20,
    alignItems: 'center',
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

export default TimerStopwatch;
