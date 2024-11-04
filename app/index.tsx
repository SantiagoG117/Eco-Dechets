import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import LoginScreen from './auth/LoginScreen';
import WelcomeScreen from './auth/WelcomeScreen';
import AppButton from '@/components/app-components/AppButton';
import { Colors } from '@/constants/Colors';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './navigation/AuthNavigator';
import AppTextInput from '@/components/app-components/forms/AppTextInput';

export default function HomeScreen() {
  return (
    <AuthNavigator></AuthNavigator>
  );
}


