import AppText from '@/components/app-components/AppText';
import React from 'react';
import { View, StyleSheet } from 'react-native';


/* 
    Display a graph representing the historical data of the current user. The graph should allow filtering by:
        ? Week
        ? Month
        ? Year
        ? Categories 

*/
function Home() {
    return (
        <View style={styles.container}>
            <AppText>This is the Home Screen</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {

    }
})
export default Home;