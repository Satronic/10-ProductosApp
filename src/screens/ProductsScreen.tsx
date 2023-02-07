import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { ProductCard } from '../components/ProductCard';
import { ProductsContext } from '../context/ProductsContext';

export const ProductsScreen = () => {

    const { products } = useContext(ProductsContext)

    return (
        <View>
            <FlatList 
                data={products}
                keyExtractor={(item) => item._id}
                renderItem={({item}) => <ProductCard productName={item.nombre}/>}
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
