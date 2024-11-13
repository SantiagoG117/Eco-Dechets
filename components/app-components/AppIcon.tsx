import React from 'react';
import { View } from 'react-native';
import { MaterialIcons as MaterialCommunityIcons } from '@expo/vector-icons';
import AppColors from '@/constants/AppColors';



function AppIcon({name , backgroundColor = AppColors.black, iconColor = AppColors.white , size = 40} : any) {
    return (    
        <View style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor,
            justifyContent: "center",
            alignItems:"center"
        }} >
            <MaterialCommunityIcons name={name} size={size * 0.5} color={iconColor}  />
        </View>       
    );
}



export default AppIcon;