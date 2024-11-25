import AppColors from '@/constants/AppColors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList, TouchableOpacity } from 'react-native';
import AppText from '../AppText';
import AppPickerItem from './AppPickerItem';
import AppPickerWasteItem from './AppPickerWasteItem';

function AppPicker({ AppPickerItemComponent = AppPickerItem ,icon, items, numberOfColumns = 1, placeholder ,selectedItem, onSelectItem, width='100%'}: any) {

    //State for showing/hidding the modalS
    const [categoryModalVisible, setCategoryModalVisible] = useState(false);
    const [wasteModalVisible, setWasteModalVisible] = useState(false);
    //State for the selected category
    const [selectedCategory, setSelectedCategory] = useState(null);


    return (
        <>
            {/* Input item for displaying the waste item */}
            <TouchableWithoutFeedback onPress={() => setCategoryModalVisible(true)}>
                <View style={[styles.container, {width}]}>

                    {icon && <MaterialCommunityIcons 
                                name={icon}
                                size={25}
                                color={AppColors.gray}
                                style={styles.icon}
                    />}

                    { selectedItem ? 
                        (<AppText style={styles.text} color = 'darkGray'>{selectedItem.name}</AppText>) :
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
            
            {/* Category Modal */}
            <Modal
                visible={categoryModalVisible}
                animationType='slide'
            >
                <View style={styles.modalContainer}  >
                <TouchableOpacity
                    style={styles.customButton}
                    onPress={() => setCategoryModalVisible(false)}
                >
                    <AppText style={styles.customButtonText} color='white'>Back to the form</AppText>
                </TouchableOpacity>
                    <View style={styles.modalTitleContainer}>
                        <AppText style={styles.modalTitle}> Please select a category</AppText>
                    </View>
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
                                            //Set the item as the value for the selected category
                                            setSelectedCategory(item);
                                            //Show the waste modal
                                            setWasteModalVisible(true)
                                            
                                        }}
                                    />}
                        />
                </View>
            </Modal>

            {/* WasteItem modal */}
            <Modal visible={wasteModalVisible} animationType="slide">
                <View style={styles.modalContainer}>
                    <TouchableOpacity
                        style={styles.customButton}
                        onPress={() => setWasteModalVisible(false)}
                    >
                        <AppText style={styles.customButtonText} color="white">
                            Back to categories
                        </AppText>
                    </TouchableOpacity>
                    <View style={styles.modalTitleContainer}>
                        <AppText style={styles.modalTitle}>
                            Please select a waste item
                        </AppText>
                    </View>
                    {/* Render AppPickerWasteItem */}
                    <AppPickerWasteItem
                        //Pass the selected category
                        category={selectedCategory}
                        onSelectItem={(item: any) => {
                            onSelectItem(item); // ! Verify this is correct: Handle waste item selection
                            setWasteModalVisible(false); 
                            setCategoryModalVisible(false);
                        }}
                    />
                </View>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: AppColors.appPickerGray,
        borderRadius: 25,
        padding: 15,
        marginVertical: 10 //Allows us to separate multiple text inputs on the same screen. 
    },
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
    icon:{
        marginRight: 5,
        position:"relative",
        top: 1
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
    },
    text: {
        flex: 1, //By taking all the available space we are sending the chevron to the right
        fontWeight: 'bold'
    },
}) 
export default AppPicker;
