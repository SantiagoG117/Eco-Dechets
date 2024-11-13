import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import WelcomeScreen from "../auth/WelcomeScreen";
import LoginScreen from "../auth/LoginScreen";
import RegisterScreen from "../auth/RegisterScreen";
import Home from "../home/Home";


/* 
    Creates a function that returns an object containing 2 properties:
        <Navigator>: Contains the <Screen> elements as its children to define the configuration routes
        <Screen>: Define configuration routes for the different components
*/

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{headerShown: false}}
    >
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
   </Stack.Navigator>
)


export default AuthNavigator;







