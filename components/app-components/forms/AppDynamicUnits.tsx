import { useFormikContext } from 'formik';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppTextInput from './AppTextInput';
import AppColors from '@/constants/AppColors';

function AppDynamicUnits() {
    /* 
        Custom react hook that returns all Formik state and helpers
        values is a Formik object that holds the key value pairs for each initial values in our form.
    */
    const { values } = useFormikContext<{wasteItem: any}>();
    const commonWaste = [2,3,4,11]; //TODO Replace this with a more maintainable approach

    const getUnits = () => {
        if (values.wasteItem){
            const categoryID = values.wasteItem.category_id;
            if(commonWaste.includes(categoryID))
                return 'Kilograms'
            else
                return 'Units'
        }
        
    }

    return (
        <AppTextInput 
            color={AppColors.black}
            backgroundColor={AppColors.appPickerGray}
            placeHolderColor={AppColors.ligthGray}
            placeholder='Metric'
            width='40%'
            value={getUnits()}
            readOnly={true}
        />
    );
}

const styles = StyleSheet.create({
    container : {

    }
})
export default AppDynamicUnits;