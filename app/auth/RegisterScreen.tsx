import React from 'react';
import { BlurView } from 'expo-blur';
import { View, StyleSheet, Text, SafeAreaView, ImageBackground, Image ,TouchableOpacity, ScrollView } from 'react-native';

import AppText from '@/components/app-components/AppText';
import AppForm from '@/components/app-components/forms/AppForm';
import AppFormField from '@/components/app-components/forms/AppFormField';
import AppSubmitButton from '@/components/app-components/forms/AppSubmitButton';
import AppColors from '@/constants/AppColors';

import * as Yup from 'yup'



const validationSchema = Yup.object().shape({
    username: Yup.
            string().
            required().
            label("Username"),
    password: Yup.
                string().
                required().
                min(4). // Password should be at least 3 characters
                label("Password"),
    confirmPassword: Yup.
            string().
            oneOf([Yup.ref('password')], 'Passwords must match').
            required('Confirm Password is required'),
    email: Yup.
            string().
            required().
            email(). //Has to be a valid email
            label('Email')
})

const handleSubmit = (values: {username: string; password:string}, navigation: any) => {
    console.log('Form values: ', values);

    //TODO: Send credentials to API

    //Redirect to home
    navigation.navigate('Home')
};

function RegisterScreen({navigation} : any) {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                style={styles.backgroundImage}
                source={require('../../assets/images/fog-forest.jpg')}
            >
                {/* Card component */}
                <BlurView intensity={80} style={styles.cardContainer}>
                    <ScrollView>

                        <AppForm
                            initialValues={{username: '', email: '', password: '', confirmPassword: ''}}
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

                            <AppFormField
                                autoCapitalize="none"
                                initialValue="password"
                                placeholder="Password"
                                secureTextEntry={true}
                                textContentType="password"
                            />

                            <AppFormField
                                autoCapitalize="none"
                                initialValue="confirmPassword"
                                placeholder="Confirm Password"
                                secureTextEntry={true}
                                textContentType="password"
                            />

                            <AppFormField
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="email-address"
                                initialValue="email"
                                placeholder="Email"
                                textContentType='username'
                            />

                            <AppSubmitButton
                                title='register'
                                width='100%'
                                style={styles.submitButton}
                            />

                            <View style={styles.returnText}>
                                <AppText style={styles.text} color='white'>Return to </AppText>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate("Login")}   
                                >
                                    <AppText color='gold'>Sign in</AppText>
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
export default RegisterScreen;