import AppColors from '@/constants/AppColors';
import React from 'react';
import { Text, StyleSheet, Platform} from 'react-native';



/* Styles for Text components encapsulated inside a costume component*/

function AppText({children, style, color, ...otherProps} : any) {
    return (
        <Text 
            style={[
                    styles.text, 
                    style, 
                    {color: AppColors[color] || AppColors.black}]} 
            {...otherProps}
        >
            {children}
        </Text>
    );
}



const styles = StyleSheet.create({
    text: {
        //color: "tomato",
        
        /* Returns a Plataform object that spread (...) style properties into the text object based on the current Plataform */
        ...Platform.select({
            ios: {
                fontSize: 20,
                fontFamily: "San Francisco",
            },
            android: {
                fontSize: 18,
                fontFamily: "Roboto",
                
            }
        })
       
    }
})

export default AppText;


