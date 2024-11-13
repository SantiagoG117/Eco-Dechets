import React from 'react';
import AppCategoryPickerItem from '@/components/app-components/forms/AppCategoryPickerItem';
import AppForm from '@/components/app-components/forms/AppForm';
import AppFormField from '@/components/app-components/forms/AppFormField';
import AppFormPicker from '@/components/app-components/forms/AppFormPicker';
import AppPickerItem from '@/components/app-components/forms/AppPickerItem';
import AppSubmitButton from '@/components/app-components/forms/AppSubmitButton';
import AppColors from '@/constants/AppColors';
import { LinearGradient } from 'expo-linear-gradient';
import { View, StyleSheet, Text, Image } from 'react-native';

import * as Yup from 'yup'
import { Formik } from 'formik';

/* 
    TODO
        ! Add title: Create new record
        ! Clear values after submission (Hint: use context for this)
 */

/* Dummy data for containers */

const containers = [
    {
        value: 1,
        label: '79.5 Liters',
        backgroundColor: 'blue',
        icon: 'inventory'
    },
    {
        value: 2,
        label: '120 Liters',
        backgroundColor: 'blue',
        icon: 'inventory'
    },
    {
        value: 3,
        label: "240 Liters",
        backgroundColor: 'blue',
        icon: 'inventory'
    },
    {
        value: 4,
        label: "360 Liters",
        backgroundColor: 'blue',
        icon: 'inventory'
    },
];

const wasteItems = [
    {
        value: 1,
        label: 'Air Conditioner',
        backgroundColor: 'green',
        icon: 'hvac'
    },
    {
        value: 2,
        label: 'Bike',
        backgroundColor: 'green',
        icon: 'pedal-bike'
    },
    {
        value: 3,
        label: "Garbage",
        backgroundColor: 'green',
        icon: 'delete'
    },
    {
        value: 4,
        label: "Recycling",
        backgroundColor: 'green',
        icon: 'recycling'
    },
];

const measureUnits = [
    {
        value: 1,
        label: 'Kilograms',
    },
    {
        value: 2,
        label: 'Unit(s)',
    },
];

const validationSchema = Yup.object().shape({
    amount: Yup.string().required().label('Amount'),
    containerSize: Yup.object().required().label('Container type'),
    measureUnits: Yup.object().required().label('Units of measure'),
    wasteType: Yup.object().required().label('Waste type')
})

function CreateWasteRecord({navigation} :any) {

    const handleSubmit = (
                            values: {amount: string; containerSize: string,  measureUnits: string, wasteType: string }, 
                            resetForm: () => void ,
                            navigation: any
                        ) => {

        console.log('Values submitted: ', values);


        //TODO: Send values to the api

        resetForm();

        //navigation.navigate('Home');
        
    }

    const afterSubmit = () => {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>

            <LinearGradient
                colors={[AppColors.primary, AppColors.secondary]}  // Gradient colors
                locations={[0, 0.6903]}          // Percentage of colors
                start={{ x: 0.5, y: 0 }}         // Start of gradient (horizontal center, top)
                end={{ x: 0.5, y: 1 }}           // End of gradient (horizontal center, bottom)
                style={styles.gradient}          // Add a style for width/height
            >
                {/* Logo */}
                <View style={styles.logoContainer}>
                    <View style={styles.logoBackground} >
                        <Image
                            source={require('../../assets/images/logo.jpg')}
                            style={styles.logo}
                        />
                        <Text style={styles.tagline}>Éco-Déchets</Text>
                    </View>
                </View>

                {/* Card */}
                <View style={styles.CardContainer}>
                    {/* Content of the card */}
                    <View style={styles.cardInputs}>
                        <AppForm
                            initialValues= {{
                                //Eventhough amount is a number value, it is represented as a string in the form
                                amount: '',
                                containerSize: null,
                                measureUnits: null,
                                wasteType: null,
                            }}
                            validationSchema={validationSchema}
                            onSubmit={(values: any, {resetForm}: any) => (handleSubmit(values, resetForm ,navigation))}
                        >
    
                            {/* Container Size */}
                            <AppFormPicker
                                AppPickerItemComponent={AppCategoryPickerItem}
                                items={containers}
                                initialValue='containerSize'
                                numberOfColumns={3}
                                placeholder='Container type'
                                width='100%'
                            />
                            
                            {/* Waste Type */}
                            <AppFormPicker
                                AppPickerItemComponent={AppCategoryPickerItem}
                                items={wasteItems}
                                initialValue='wasteType'
                                numberOfColumns={3}
                                placeholder='Waste type'
                                width='100%'
                            />

                            {/* Amount*/}
                            <AppFormField
                                color={AppColors.black}
                                backgroundColor={AppColors.appPickerGray}
                                initialValue='amount'
                                keyboardType='numeric'
                                placeholder='Amount'
                                placeHolderColor={AppColors.ligthGray}
                                //width='75%'
                            />

                            <AppFormPicker 
                                AppPickerItemComponent={AppPickerItem}
                                items={measureUnits}
                                initialValue='measureUnits'
                                numberOfColumns={2}
                                placeholder='Units of measure'
                                //width='55%'
                            />
                            
                            {/* Submit buttons */}
                            <View style={styles.buttonsContainer}>
                                <AppSubmitButton 
                                    title='add record'
                                    width='100%'
                                />
                            </View>
                        </AppForm>
                    </View>
                </View>

            </LinearGradient>
            
        </View>
    );
}

const styles = StyleSheet.create({
    amountContainer: {
        flexDirection: 'row',
        marginBottom: 20
    },
    buttonsContainer: {
        marginBottom: 20,
    },
    CardContainer: {
        height: '78%',
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: AppColors.white
    },
    container : {
        flex: 1,
    },
    gradient: {
        height: '100%',              
        width: '100%',  
        justifyContent: 'flex-end'            
    },
    cardInputs: {
        //marginBottom: 20,
    },
    logo: {
        width: 100,
        height:100
    },
    logoContainer: {
        alignItems: "center", //Align child items(logo and tagline) accross the secondary axis
        paddingBottom: 40,
        //backgroundColor: AppColors.white, 
    },
    logoBackground: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: AppColors.white
    },
    title: {
        justifyContent: 'center'
    }
    ,tagline: {
        color: AppColors.white,
        fontWeight: "600", // *Gives the text more visibility PREVENTS CROPPING!!
        fontSize: 18,
        fontStyle: 'italic',
        paddingTop: 6
    }
})
export default CreateWasteRecord;