import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppTextInput from './AppTextInput';
import { useFormikContext } from 'formik';
import AppErrorMessage from './AppErrorMessage';

/* Defines the structure of our Form values. Necessary for TypeScript to infer the types correctly */
interface InitialValues {
    amount: string;
    confirmPassword: string;
    email: string;
    password: string;
    username: string;
  }
  
/* Ensures that the initialValue prop is a key of InitialValues */
interface AppFormFieldProps {
    initialValue: keyof InitialValues;
    [key: string]: any //*Allows the component to accept other props send through the ...otherTextInputs array
}

function AppFormField({initialValue, ...otherTextInputs}: AppFormFieldProps) {

    const {setFieldTouched, handleChange, errors, touched, values} = useFormikContext<InitialValues>(); //InitialValues type allow typescript to infer the types for the errors and touched fields

    return (
        <>
            <AppTextInput
                onBlur={() => setFieldTouched(initialValue)}
                onChangeText={handleChange(initialValue)}
                value={values[initialValue]} //Pass the value of the current initial value to AppText input
                {...otherTextInputs}
            />

            {/* Validation */}
            <AppErrorMessage error = {errors[initialValue]} isTouched={touched[initialValue]} />
        </>
    );
}


export default AppFormField;