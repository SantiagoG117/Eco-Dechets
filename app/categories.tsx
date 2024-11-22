import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import APICategories from './API/APICategories';

interface Category {
    id: number;
    name: string;
}


function categories() {

    const [categories, setCategories] = useState<Category[]>([]);


    useEffect(() => {
        loadCategories()
    }, []);

   /*  async function fetchData() {
        const response = await fetch("http://192.168.68.118:8080/categories");
        const data = await response.json();
        setCategories(data)
    } */

    const loadCategories = async () => {
        const response = await APICategories.getCategories();
        setCategories(response.data as Category[])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{JSON.stringify(categories, null, 2)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontWeight: 'bold'
    }
})
export default categories;