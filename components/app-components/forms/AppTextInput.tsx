import React from 'react';
import { TextInput, View, StyleSheet, Platform } from 'react-native';

import AppColors from '@/constants/AppColors';
import { BlurView } from 'expo-blur';


function AppTextInput({color =  AppColors.white, backgroundColor = AppColors.glassTransparency, placeHolderColor =  AppColors.white, width = '100%', value ,...textInputProps } :any) {
    return (
        <BlurView 
            intensity={80} 
            style={[
                styles.container,
                {backgroundColor},
                {width}
            ]}
        >
            <TextInput
                placeholderTextColor={placeHolderColor}
                {...textInputProps} 
                style={
                    [
                        styles.textInput, 
                        {color}
                    ]
                }
                value={value} //Set the value of the text input to the value of initial value
            />
        </BlurView>
    );
}


const styles = StyleSheet.create({
    container: {
        //backgroundColor: AppColors.glassTransparency,
        borderRadius: 25,
        flexDirection: "row",
        marginVertical: 10, //Allows us to separate multiple text inputs on the same screen. 
        padding: 15,
        //width: '100%',
        overflow: 'hidden', // Required for borderRadius to apply correctly with BlurView
        borderWidth: 1.5,
        borderColor: 'rgba(255, 255, 255, 1)', 
    },
    textInput: {
        width: '100%',
        fontFamily: Platform.select({
            ios: 'San Francisco', // iOS-specific font
            android: 'Roboto'      // Android-specific font
        }),
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default AppTextInput;