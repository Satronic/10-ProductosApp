import React from 'react'
import { View, StyleSheet } from 'react-native';

export const Background = () => {
  return (
    <View 
        style={styles.background}
    />
  )
}


const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        top: -100,
        // backgroundColor: '#CCFFCC',
        backgroundColor: '#003300',
        width: '150%',
        height: '150%',
        transform: [
            {
                rotate: '-45deg'
            }
        ]
    }
});