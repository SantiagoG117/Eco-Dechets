import AppColors from '@/constants/AppColors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useFormikContext } from 'formik';
import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Platform, TouchableOpacity } from 'react-native';
import AppErrorMessage from './AppErrorMessage';


/* Defines the structure of our Form values. Necessary for TypeScript to infer the types correctly */
interface InitialValues {
    email: string;
    confirmPassword: string;
    username: string;
    password: string;
  }
  
/* Ensures that the initialValue prop is a key of InitialValues */
interface AppFormFieldProps {
    initialValue: keyof InitialValues;
    [key: string]: any //*Allows the component to accept other props send through the ...textInputProps array
}

function AppPasswordField({icon, initialValue, ...textInputProps}: AppFormFieldProps) {
    //State to toggle password visibility
    const [passwordVisible, setPasswordVisible] = useState(false);

    const {setFieldTouched, handleChange, errors, touched} = useFormikContext<InitialValues>(); //InitialValues type allow typescript to infer the types for the errors and touched fields

    return (
        <>
            <BlurView intensity={80} style={styles.container}>
                <TextInput
                    onBlur={() => setFieldTouched(initialValue)}
                    onChangeText={handleChange(initialValue)}
                    placeholderTextColor={AppColors.white}
                    style={styles.textInput}
                    secureTextEntry={!passwordVisible}
                    {...textInputProps} 
                />

                <TouchableOpacity
                    onPress={() => setPasswordVisible(!passwordVisible)}
                    style={styles.passwordIcon}
                >
                    <MaterialCommunityIcons 
                        name={passwordVisible ? 'eye-off' : 'eye'}
                        size={24}
                        color={AppColors.white}
                    />
                </TouchableOpacity>
            </BlurView>

            {/* Validation */}
            <AppErrorMessage error = {errors[initialValue]} isTouched={touched[initialValue]} />

        </>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.glassTransparency,
        borderRadius: 25,
        flexDirection: "row",
        marginVertical: 10, //Allows us to separate multiple text inputs on the same screen. 
        padding: 15,
        width: '100%',
        overflow: 'hidden', // Required for borderRadius to apply correctly with BlurView
        borderWidth: 1.5,
        borderColor: 'rgba(255, 255, 255, 1)', 
    },
    passwordIcon: {
        position:"relative",
        right: 25,
        top: 2
    },
    textInput: {
        width: '100%',
        fontFamily: Platform.select({
            ios: 'San Francisco', // iOS-specific font
            android: 'Roboto'      // Android-specific font
        }),
        color: AppColors.white,
        fontSize: 18
    }
})
export default AppPasswordField;