import React from 'react';
import { View, StyleSheet, SafeAreaView, ImageBackground, Image, Text } from 'react-native';

import AppButton from '@/components/app-components/AppButton';
import AppColors from '@/constants/AppColors';

function WelcomeScreen({navigation}: any) {
    return (
        <SafeAreaView style={styles.container} >
            <ImageBackground
                style={styles.backgroundImage}
                source={require('../../assets/images/fog-forest.jpg')}
            >
                
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../../assets/images/logo.jpg')}
                        style={styles.logo}
                    />
                    <Text style={styles.tagline}>Éco-Déchets</Text>
                </View>
                
                <View style={styles.buttonsContainer}>
                    <AppButton title= 'login' onPress={() => navigation.navigate("Login")} width='90%' />
                    <AppButton title= 'register' color = 'secondaryTransparency' onPress={() => navigation.navigate("Register")} width='90%' />
                </View>
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
        justifyContent: "flex-end", 
        alignItems: 'center',
    },
    buttonsContainer: {
        alignItems: 'center',
        width: '100%',
        bottom: 30
    },
    logo: {
        width: 200,
        height:200
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center" //Align child items(logo and tagline) accross the secondary axis
    },
    tagline: {
        fontWeight: "600", // *Gives the text more visibility PREVENTS CROPPING!!
        fontSize: 25,
        fontStyle: 'italic',
        color: AppColors.primaryTransparency
    },
})
export default WelcomeScreen;