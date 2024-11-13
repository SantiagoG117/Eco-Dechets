import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import CreateWasteRecord from "../home/CreateWasteRecord";
import Home from "../home/Home";
import Account from "../home/Account";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NewEntryButton from "./NewEntryButton";
import AppColors from "@/constants/AppColors";

const Tab = createBottomTabNavigator();
const AppNavigator = () => (
     <Tab.Navigator
         screenOptions={{
            tabBarActiveTintColor: AppColors.primary,
            headerShown: false      
         }}
     
     >

        {/* Historic tab */}
        <Tab.Screen 
            name='Home' 
            component={Home}
            options={{
               tabBarIcon: ({color, size}) => 
                  <MaterialCommunityIcons name="home" color={color} size={size} />
            }}
        
        />
         {/* Create waste record tab*/}
        <Tab.Screen 
            name='Create new Waste' 
            component={CreateWasteRecord}
            options={ ({navigation}) => ({
               tabBarButton: () => 
                  <NewEntryButton onPress={() => navigation.navigate("Create new Waste")}/>,
               tabBarIcon: ({color, size}) => 
                  <MaterialCommunityIcons name="plus-circle" color={color} size={size}/>   
            })}
        />
         
         {/* Account tab  */}
        <Tab.Screen 
            name='Account' 
            component={Account}
            options={{
               tabBarIcon: ({color, size}) => 
                   <MaterialCommunityIcons name="account" color={color} size={size}/>
           }}
         />
     </Tab.Navigator>
);

export default AppNavigator;
