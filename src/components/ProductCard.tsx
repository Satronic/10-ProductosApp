import React from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native';

interface ProductCardProps {
    productName: string;
    productImage?: string;
}

export const ProductCard = ({ productName, productImage }: ProductCardProps) => {
    return (
        <TouchableOpacity>
            <View>
                <View>

                </View>
                <View>

                </View>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    productContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        flex: 0.3
    },
    infoContainer: {
        flex: 0.7
    }
})
