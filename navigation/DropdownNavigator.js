import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchableDropdown from '../components/Dropdown/SearchableDropdown';
import MultiSelectDropdown from '../components/Dropdown/MultiSelectDropdown';

const Stack = createStackNavigator();

const DropdownNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SearchableDropdown" component={SearchableDropdown} />
      <Stack.Screen name="MultiSelectDropdown" component={MultiSelectDropdown} />
    </Stack.Navigator>
  );
};

export default DropdownNavigator;
