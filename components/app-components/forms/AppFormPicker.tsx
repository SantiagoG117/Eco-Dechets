import React from 'react';
import { useFormikContext } from 'formik';
import AppErrorMessage from './AppErrorMessage';
import AppPicker from './AppPicker';




//Explicitly define the fields and their type to be used in the component
interface InitialValues {
    //containerSize: string;
    //measureUnits: string
    wasteItem: string;
}

interface AppFormPickerProps {
    initialValue: keyof InitialValues;
    [key: string]: any; //*Allows the component to accept other props different than initialValue 
}

function AppFormPicker({AppPickerItemComponent, items, initialValue, numberOfColumns, placeholder, width} : AppFormPickerProps) {
                
    const {setFieldValue, values, errors, touched} = useFormikContext<InitialValues>();

    return (
        <>
            <AppPicker
                AppPickerItemComponent={AppPickerItemComponent}
                items = {items}
                numberOfColumns={numberOfColumns}
                //Event raised when the user selects an item. It sets the selected item as the value of the initialValue
                onSelectItem = {(item:any) => setFieldValue(initialValue, item)}
                placeholder = {placeholder}
                //values is a Formik object that holds the key value pairs for each initial values in our form.
                // The current value of the passed initialValue of the form is set as the selected item.
                selectedItem = {values[initialValue]}
                width={width}
            />

            <AppErrorMessage error={errors[initialValue]} isTouched={touched[initialValue]} />
        </>

    );
}


export default AppFormPicker;