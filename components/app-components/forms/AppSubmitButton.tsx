import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppButton from '../AppButton';
import { useFormikContext } from 'formik';

function AppSubmitButton({title, width, style} : any) {

    /* handleSubmit() submits the Formik form */
    const {handleSubmit} = useFormikContext();
     
    return (
        <AppButton 
            title={title}
            width={width}
            onPress={handleSubmit}
            style={style}
        />

    );
}

export default AppSubmitButton;