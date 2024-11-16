import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchableDropdown from '../components/Dropdown/SearchableDropdown';
import MultiSelectDropdown from '../components/Dropdown/MultiSelectDropdown';

const Stack = createStackNavigator();

const DropdownNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchableDropdown"
        component={SearchableDropdown}
        options={{ title: 'Searchable Dropdown' }}
      />
      <Stack.Screen
        name="MultiSelectDropdown"
        component={MultiSelectDropdown}
        options={{ title: 'Multi Select Dropdown' }}
      />
    </Stack.Navigator>
  );
};

export default DropdownNavigator;
