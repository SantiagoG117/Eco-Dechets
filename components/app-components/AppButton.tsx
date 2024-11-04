import AppColors from '@/constants/AppColors';
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

function AppButton({title, onPress, color, style, width='100%'}: any) {
    return (
        <TouchableOpacity 
            style={[
                styles.button, 
                style,
                /* This second object overrides styles in the styles object. If no color is selected, primary will be set by default. */
                { backgroundColor: AppColors[color] || AppColors.primaryTransparency},  // *colors[color] allows us to pick the color dynamically
                {width}
            ]}
            onPress={onPress} //Handle onPress event and pass the handler from the outside       
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems:"center",
        marginBottom: 20
    },
    text: {
        color: AppColors.white,
        fontSize: 20,
        textTransform: "uppercase",
        fontWeight: "bold"
    }
})
export default AppButton;