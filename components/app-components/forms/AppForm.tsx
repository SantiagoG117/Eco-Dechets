import React from 'react';
import { Formik } from 'formik';

function AppForm({initialValues, onSubmit, validationSchema, children} : any) {
    return (
        <Formik
            initialValues={initialValues}

            validationSchema={validationSchema}

            /* Function that gets called when the form is submitted. */
            onSubmit={onSubmit}
        >
            {/* 
                Formik expect a function with an arg holding different properties 

                The function returns a JSX expression, for that reason we add the brackets to the return statement, so we can break down the JSX expression into
                multiple lines.

                A function in react should return only components. Since we have multiple components in a form we must wrap all the components inside a fragment
                (<> </>) and return it.
            */}
            
            {() => (
                <>
                    {children}
                </>
            )}
        </Formik>
    );
}

export default AppForm;