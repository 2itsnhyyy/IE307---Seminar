import React from 'react';
import { View, Button, Alert } from 'react-native';
import RNCalendarEvents from 'react-native-calendar-events';

const AddEventCalendar = () => {
  const addEvent = async () => {
    try {
      const permission = await RNCalendarEvents.requestPermissions();
      if (permission === 'authorized') {
        await RNCalendarEvents.saveEvent('Meeting with Team', {
          startDate: '2024-11-25T10:00:00.000Z',
          endDate: '2024-11-25T11:00:00.000Z',
          location: 'Office',
        });
        Alert.alert('Event added to your calendar!');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Button title="Add Event to Calendar" onPress={addEvent} />
    </View>
  );
};

export default AddEventCalendar;
