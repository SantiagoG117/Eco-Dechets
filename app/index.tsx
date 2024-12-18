
import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './navigation/AuthNavigator';
import TabLayout from './(tabs)/_layout';
import AppPicker from '@/components/app-components/forms/AppPicker';
import Categories from './categories';
import AppPickerWasteItem from '@/components/app-components/forms/AppPickerWasteItem';


export default function HomeScreen() {
  return (
    //<AuthNavigator/>
    <AppNavigator></AppNavigator>
  );
}


