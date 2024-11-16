import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import DropdownNavigator from './DropdownNavigator'; // Cập nhật đường dẫn
import DateTimeNavigator from './DateTimeNavigator'; // Cập nhật đường dẫn
import CalendarNavigator from './CalendarNavigator'; // Cập nhật đường dẫn

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Dropdown"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#2e86de',
          tabBarInactiveTintColor: '#a5b1c2',
        }}
      >
        <Tab.Screen
          name="Dropdown"
          component={DropdownNavigator}
          options={{
            tabBarLabel: 'Dropdown',
            tabBarIcon: ({ color, size }) => (
              <Icon name="format-list-bulleted" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="DateTime"
          component={DateTimeNavigator}
          options={{
            tabBarLabel: 'DateTime',
            tabBarIcon: ({ color, size }) => (
              <Icon name="clock-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Calendar"
          component={CalendarNavigator}
          options={{
            tabBarLabel: 'Calendar',
            tabBarIcon: ({ color, size }) => (
              <Icon name="calendar" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
