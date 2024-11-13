import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from '../AppText';


//The action of the onPress event should be decided by the consumer of this component
function AppPickerItem({ item, onPress} :any) {
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText style={styles.text}>{item.label}</AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text:{
        padding: 20
    }
})
export default AppPickerItem;