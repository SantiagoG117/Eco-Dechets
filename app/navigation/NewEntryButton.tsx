import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppColors from '@/constants/AppColors';



function NewEntryButton({onPress} :any) {
    return (
        <TouchableOpacity onPress={onPress} >
            <View style={styles.container}>
                <MaterialCommunityIcons name='plus-circle' color={AppColors.white} size={40}/>
            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    container : {
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: AppColors.primary,
        borderColor: AppColors.white,
        height:80,
        width:80,
        borderRadius: 40,
        bottom: 30,
        borderWidth: 10
    }
})
export default NewEntryButton;