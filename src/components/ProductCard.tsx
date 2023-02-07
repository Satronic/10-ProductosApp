import React from 'react'
import { TouchableOpacity, View, StyleSheet, Text, Image } from 'react-native';

interface ProductCardProps {
    productName: string;
    productImage?: string;
}

export const ProductCard = ({ productName, productImage }: ProductCardProps) => {
    return (
        <TouchableOpacity>
            <View style={styles.productContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.productImage}
                        source={{
                            uri: "---",
                        }}                    
                    />
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.productName}>{productName}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    productContainer: {
        backgroundColor: '#151515',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        padding: 5,
        margin: 5
    },
    imageContainer: {
        flex: 0.3
    },
    productImage: {
        width: 100,
        height: 80,
        borderWidth: 1,
        borderColor: 'white'
    },
    infoContainer: {
        flex: 0.7
    },
    productName: {
        color: 'white'
    }
})
