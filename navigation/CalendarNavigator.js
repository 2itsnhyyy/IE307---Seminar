import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CalendarPicker from '../components/Calendar/CalendarPicker';
import CalendarWithEvents from '../components/Calendar/CalendarWithEvents';
import AddEventToDeviceCalendar from '../components/Calendar/AddEventToDeviceCalendar';

const Stack = createStackNavigator();

const CalendarNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CalendarPicker" component={CalendarPicker} />
      <Stack.Screen name="CalendarWithEvents" component={CalendarWithEvents} />
      <Stack.Screen name="AddEventToDeviceCalendar" component={AddEventToDeviceCalendar} />
    </Stack.Navigator>
  );
};

export default CalendarNavigator;
