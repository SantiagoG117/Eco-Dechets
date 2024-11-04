import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppTextInput from './AppTextInput';
import { useFormikContext } from 'formik';
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
    [key: string]: any //*Allows the component to accept other props send through the ...otherTextInputs array
}

function AppFormField({initialValue, ...otherTextInputs}: AppFormFieldProps) {

    const {setFieldTouched, handleChange, errors, touched} = useFormikContext<InitialValues>(); //InitialValues type allow typescript to infer the types for the errors and touched fields

    return (
        <>
            <AppTextInput
                onBlur={() => setFieldTouched(initialValue)}
                onChangeText={handleChange(initialValue)}
                {...otherTextInputs}
            />

            {/* Validation */}
            <AppErrorMessage error = {errors[initialValue]} isTouched={touched[initialValue]} />
        </>
    );
}

const styles = StyleSheet.create({
    container : {

    }
})
export default AppFormField;