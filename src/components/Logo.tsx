import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export const Logo = () => {
  return (
    <View style={styles.logoContainer}>
        <Image 
            style={styles.image}
            source={require('../assets/react-logo-white.png')}
        />
    </View>
  )
}


const styles = StyleSheet.create({
    logoContainer: {
        alignContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    image: {
        width: 81,
        height: 71
    }
});