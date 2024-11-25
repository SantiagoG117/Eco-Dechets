import React, { memo, useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Modal, TouchableOpacity, Text } from 'react-native';
import AppCategoryPickerItem from './AppCategoryPickerItem';
import AppText from '../AppText';
import AppColors from '@/constants/AppColors';
import APIWasteItems from '@/app/API/APIWasteItems';


const AppPickerWasteItem = memo(function AppPickerWasteItem({ category, onSelectItem }: any) {



    interface WasteItem {
        id: string;
        name: string;
        category_id: string;
        icon_name: string;
    }
    const [wasteItems, setWasteItems] = useState<WasteItem[]>([])

    
    useEffect(() => {
        loadWasteItems();
    }, [])
    
    const loadWasteItems = async () => {
        const response = await APIWasteItems.getWasteitems(category.id);
        if(response.ok && response.data){
            setWasteItems(response.data as WasteItem[])
        }
    }

    
    
    return (
        <>
            <View>
                <FlatList
                    data={wasteItems}
                    keyExtractor={item => item.id}
                    numColumns={3}
                    renderItem={({item}) => 
                        <AppCategoryPickerItem
                            item={item}
                            label={item.name}
                            onPress={() => {
                                /* 
                                    Event raised by the component when the user selects an item
                                    Set the selected item in the FlatList as the current item 
                                    using useState. By doing so it displays the selected category
                                */
                                        onSelectItem(item); 
                            }}
                        />
                    
                    }
                />
            </View>
                
        </>
    );
});

const styles = StyleSheet.create({
    customButton: {
        backgroundColor: AppColors.primary, 
        paddingVertical: 15, 
        paddingHorizontal: 30, 
        borderRadius: 50, 
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10, 
    },
    customButtonText: {
        color: AppColors.white, 
        fontWeight: 'bold',
        fontSize: 20, 
    },    
    modalContainer: {
        flex: 1, 
        backgroundColor: AppColors.modalBackgroundColor, 
        padding: 10,
    },    
    modalTitle: {
        fontWeight: 'bold',
        padding: 5
    },
    modalTitleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 3
    }
})
export default AppPickerWasteItem;