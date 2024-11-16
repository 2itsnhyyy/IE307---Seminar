import React from 'react';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalendarWithEvents = () => {
  return (
    <View>
      <Calendar
        onDayPress={(day) => console.log(day)}
        markedDates={{
          '2024-11-20': { selected: true, marked: true, dotColor: 'red' },
          '2024-11-22': { marked: true, dotColor: 'blue' },
        }}
      />
    </View>
  );
};

export default CalendarWithEvents;
