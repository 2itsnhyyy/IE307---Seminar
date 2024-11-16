import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DatePicker from '../components/DateTime/DatePicker';
import TimePicker from '../components/DateTime/TimePicker';
import CountdownTimer from '../components/DateTime/CountdownTimer';
import TimerStopwatch from '../components/DateTime/TimerStopwatch';

const Stack = createStackNavigator();

const DateTimeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DatePicker" component={DatePicker} />
      <Stack.Screen name="TimePicker" component={TimePicker} />
      <Stack.Screen name="CountdownTimer" component={CountdownTimer} />
      <Stack.Screen name="TimerStopwatch" component={TimerStopwatch} />
    </Stack.Navigator>
  );
};

export default DateTimeNavigator;
