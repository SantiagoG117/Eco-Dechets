import React from 'react';
import { TouchableOpacity, StyleSheet, View} from 'react-native';
import AppIcon from '../AppIcon';
import AppText from '../AppText';
import AppColors from '@/constants/AppColors';


 
function AppCategoryPickerItem({ item, onPress } : any) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <AppIcon
                backgroundColor={'green'}
                name={item.icon_name}
                size={80}
            />
            <AppText style={styles.label}>{item.name}</AppText>
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
        fontWeight:'100',
        fontSize: 15
    }
})

export default AppCategoryPickerItem;