import React from 'react';
import { StyleSheet } from 'react-native';
import AppText from '../AppText';



function AppErrorMessage({error, isTouched} :any) {
    
    /* If the input field has not being touched or no error prop is provided don't render the component */
    if( !isTouched || !error) return null;
    
    return (
        <AppText color="danger" >{error}</AppText>
    );
}

export default AppErrorMessage;
