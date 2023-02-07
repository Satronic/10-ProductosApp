import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { ProductsContext } from '../context/ProductsContext';

export const ProductsScreen = () => {

    const { products } = useContext(ProductsContext)

    return (
        <View>
            <FlatList 
                data={products}
                keyExtractor={(item) => item._id}
                renderItem={({item}) => <Text style={styles.text}>{item.nombre}</Text>}
            />
            {/* <Text style={styles.text}>{JSON.stringify(products, null, 5)}</Text> */}
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        color: 'white'
    }
})
