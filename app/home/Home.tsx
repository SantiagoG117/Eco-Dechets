import AppText from '@/components/app-components/AppText';
import AppColors from '@/constants/AppColors';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import * as SQLite from 'expo-sqlite'


/* 
    Display a graph representing the historical data of the current user. The graph should allow filtering by:
        ? Week
        ? Month
        ? Year
        ? Categories 

    TODO:
        ! Build graph
*/


function Home() {
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
                        
                    </View>
                </View>

            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
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
    }
    ,tagline: {
        color: AppColors.white,
        fontWeight: "600", 
        fontSize: 18,
        fontStyle: 'italic',
        paddingTop: 6
    }
})
export default Home;