import React, { useEffect, useState } from 'react';
import AppCategoryPickerItem from '@/components/app-components/forms/AppCategoryPickerItem';
import AppForm from '@/components/app-components/forms/AppForm';
import AppFormField from '@/components/app-components/forms/AppFormField';
import AppFormPicker from '@/components/app-components/forms/AppFormPicker';
import AppSubmitButton from '@/components/app-components/forms/AppSubmitButton';
import AppColors from '@/constants/AppColors';
import { LinearGradient } from 'expo-linear-gradient';
import { View, StyleSheet, Text, Image } from 'react-native';

import * as Yup from 'yup'
import AppText from '@/components/app-components/AppText';
import APICategories from '../API/APICategories';
import APIWasteRecords from '../API/APIWasteRecords';
import AppTextInput from '@/components/app-components/forms/AppTextInput';
import { useFormikContext } from 'formik';
import AppDynamicUnits from '@/components/app-components/forms/AppDynamicUnits';


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


const validationSchema = Yup.object().shape({
    amount: Yup.string().optional().label('Amount'),
    wasteItem: Yup.object().required().label('Waste item')
})

function CreateWasteRecord({navigation} :any) {

    interface Category {
        id: number;
        name: string;
        icon_name: string;
    }
    
    const [amountValidationVisible, setAmountValidationVisible] = useState(false);
    const [categories, setCategories] = useState<Category[]>([]);


    useEffect(() => {
        loadCategories()
    }, []);

    const loadCategories = async () => {
        const response = await APICategories.getCategories();
        setCategories(response.data as Category[])
    }
    
    const handleSubmit = async ( values: {amount: string, wasteItem: any }, resetForm: () => void , navigation: any) => {

        if(values.amount === ""){
            setAmountValidationVisible(true)
            return;
        }

        const username = 'SantiagoGP117' //TODO Change this value for the current user name

        //Send values to the API datapoint
        const result = await APIWasteRecords.CreateWasteRecord(
            username,
            values.wasteItem.id,
            values.amount,
            values.wasteItem.category_id
        );

        if(!result.ok)
            return console.log('Could not save the listing. ', result.problem)


        setAmountValidationVisible(false)
        resetForm();
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
                                wasteItem: null,
                            }}
                            validationSchema={validationSchema}
                            onSubmit={(values: any, {resetForm}: any) => (handleSubmit(values, resetForm ,navigation))}
                        >

                            {/* Waste item */}
                            <AppFormPicker
                                AppPickerItemComponent={AppCategoryPickerItem}
                                items={categories}
                                initialValue='wasteItem'
                                numberOfColumns={3}
                                placeholder='Waste type'
                                width='100%'
                            />

                            {/* Amount View */}
                            <View style={styles.amountContainer}>
                                <View style={styles.metricsContainer} >
                                    {/* Amount*/}
                                    <AppFormField
                                        color={AppColors.black}
                                        backgroundColor={AppColors.appPickerGray}
                                        initialValue='amount'
                                        keyboardType='numeric'
                                        placeholder='Amount'
                                        placeHolderColor={AppColors.ligthGray}
                                        width='60%'
                                    />

                                    {/* Units of measure*/}
                                    <AppDynamicUnits />
                                </View>
                                <View style={styles.validationContainer}>
                                    {/* Validation for amount */}
                                    {amountValidationVisible && <AppText color='validation'>Amount is a required field</AppText> }
                                </View>
                            </View>

                                                        
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
        flexDirection: 'column',
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
    metricsContainer: {
        flexDirection: 'row'
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
    },
    validationContainer: {
        
    }
})
export default CreateWasteRecord;