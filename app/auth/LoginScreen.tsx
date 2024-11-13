import React from 'react';
import AppForm from '@/components/app-components/forms/AppForm';
import AppFormField from '@/components/app-components/forms/AppFormField';
import AppSubmitButton from '@/components/app-components/forms/AppSubmitButton';
import { BlurView } from 'expo-blur';
import { StyleSheet, SafeAreaView, ImageBackground, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

import AppColors from '@/constants/AppColors';
import * as Yup from 'yup'
import AppText from '@/components/app-components/AppText';
import AppPasswordField from '@/components/app-components/forms/AppPasswordField';
import { router } from 'expo-router';



/* 
    TODO:
        ! Change color and font for error messages

*/


/* 
    Validation Schema: 
        Yub.object().shape() defines an object that contains all the rules for validating our form:
*/
const validationSchema = Yup.object().shape({
    username: Yup.string().
            required().
            label("Username"),
    password: Yup.
                string().
                required().
                min(4). // Password should be at least 3 characters
                label("Password")
})


const handleSubmit = (values: {username: string; password:string}, navigation: any) => {
    console.log('Form values: ', values);

    //TODO: Send credentials to API

    //Redirect to home
    router.replace('/navigation/AppNavigator')
    //navigation.navigate('Home')
};

function LoginScreen({navigation}: any) {

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                style={styles.backgroundImage}
                source={require('../../assets/images/fog-forest.jpg')}
            >
                {/* Card component */}
                <BlurView intensity={80} style={styles.cardContainer}>
                    <ScrollView style={styles.scrollViewContainer}>
                        <AppForm
                            initialValues={{username:'', password:''}}
                            validationSchema={validationSchema}
                            onSubmit={(values : any) => handleSubmit(values, navigation)}
                        >
                            {/* Logo */}
                            <View style={styles.logoContainer}>
                                <Image
                                    source={require('../../assets/images/logo.jpg')}
                                    style={styles.logo}
                                />
                                <Text style={styles.tagline}>Éco-Déchets</Text>
                            </View>

                            {/* Input fields and button */}

                            <AppFormField
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="email-address"
                                initialValue="username"
                                placeholder="Username"
                                textContentType='username'
                            />

                            <AppPasswordField
                                autoCapitalize="none"
                                initialValue="password"
                                placeholder="Password"
                                textContentType="password"
                            />

                            <AppSubmitButton
                                title='login'
                                width='100%'
                                style={styles.submitButton}
                            />

                            <View style={styles.returnText}>
                                <AppText style={styles.text} color='white'>Don't have an account? </AppText>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate("Register")}   
                                >
                                    <AppText color='gold'>Sign up</AppText>
                                </TouchableOpacity>
                            </View>
                            
                        </AppForm>
                    </ScrollView>
                </BlurView>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        justifyContent: "center", 
        alignItems: 'center',
    },
    cardContainer: {
        height: '92%',
        width: '85%',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: AppColors.glassTransparency,
        overflow: 'hidden', // Required for borderRadius to apply correctly with BlurView
        borderWidth: 1.5,
        borderColor: 'rgba(255, 255, 255, 1)', 
        
    },
    logo: {
        width: 200,
        height:200
    },
    logoContainer: {
        alignItems: "center", //Align child items(logo and tagline) accross the secondary axis
        paddingBottom: 10
    },
    returnText :{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    scrollViewContainer: {
        width: '100%'
    },
    submitButton: {
        marginTop: 5,
        marginBottom: 10
    },
    tagline: {
        fontWeight: "600", // *Gives the text more visibility PREVENTS CROPPING!!
        fontSize: 25,
        fontStyle: 'italic',
        color: AppColors.primaryTransparency
    },
    text: {
        fontStyle: 'italic',
        fontSize: 18
    },
})
export default LoginScreen;