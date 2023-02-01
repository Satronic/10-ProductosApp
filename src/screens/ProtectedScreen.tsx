import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export const ProtectedScreen = () => {
    return (
        <View>
            <Text style={styles.text}>Protected Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'white'
    }
})
