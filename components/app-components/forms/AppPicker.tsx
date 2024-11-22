import AppColors from '@/constants/AppColors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import AppText from '../AppText';
import AppPickerItem from './AppPickerItem';

function AppPicker({ AppPickerItemComponent = AppPickerItem ,icon, items, numberOfColumns = 1, placeholder ,selectedItem, onSelectItem, width='100%'}: any) {

    //State for showing/hidding the modal
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.container, {width}]}>

                    {icon && <MaterialCommunityIcons 
                                name={icon}
                                size={25}
                                color={AppColors.gray}
                                style={styles.icon}
                    />}

                    { selectedItem ? 
                        (<AppText style={styles.text} color = 'darkGray'>{selectedItem.label}</AppText>) :
                        (<AppText style={styles.text} color = 'ligthGray'>{placeholder}</AppText>)
                    }

                    <MaterialCommunityIcons 
                        name="chevron-down" 
                        size={25} 
                        color={AppColors.gray}
                        style={styles.icon}
                    />
                </View>
            </TouchableWithoutFeedback>
            
            <Modal
                visible={modalVisible}
                animationType='slide'
            >
                <Button
                    title='Close'
                    onPress={() => setModalVisible(false)}
                />
                <FlatList
                        data={items}
                        keyExtractor={item => item.id}
                        numColumns={numberOfColumns}
                        renderItem={({ item }) => 
                                    /* 
                                        The consumer of the AppPicker component can specify the type of picker item to use
                                        by sending it as the component prop AppPickerItemComponent. 

                                        The sent component must have a signature with two props: item and onPress.
                                    */
                                    <AppPickerItemComponent
                                        /* 
                                            item is a general and reusable prop SET TO THE ITEM WE WISH TO RENDER 
                                            This item is an object that can adjust to the different properties
                                            of the AppPickerItemComponent sent by the consumer of this component.
                                        */
                                        item={item}
                                        label={item.name}
                                        onPress={() => {
                                            /* Close the modal */
                                            setModalVisible(false);
                                            /* 
                                                Event raised by the component when the user selects an item
                                                
                                                Set the selected item in the FlatList as the current item 
                                                using useState. By doing so it displays the selected category
                                            */
                                            onSelectItem(item); 
                                        }}
                                    />}
                    >

                    </FlatList>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        //width: '100%',
        flexDirection: 'row',
        backgroundColor: AppColors.appPickerGray,
        borderRadius: 25,
        padding: 15,
        marginVertical: 10 //Allows us to separate multiple text inputs on the same screen. 
    },
    icon:{
        marginRight: 5,
        position:"relative",
        top: 1
    },
    text: {
        flex: 1, //By taking all the available space we are sending the chevron to the right
        fontWeight: 'bold'
    },
})
export default AppPicker;