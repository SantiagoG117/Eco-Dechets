import React from 'react';
import { TouchableOpacity, StyleSheet, View} from 'react-native';
import AppIcon from '../AppIcon';
import AppText from '../AppText';


 
function AppCategoryPickerItem({ item, onPress } : any) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <AppIcon
                backgroundColor={item.backgroundColor}
                name={item.icon}
                size={80}
            />
            <AppText style={styles.label}>{item.label}</AppText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        paddingVertical: 15,
        alignItems:"center",
        width: '33%'
    },
    label: {
        marginTop: 5,
        textAlign: "center",
        fontWeight:'bold'
    }
})

export default AppCategoryPickerItem;