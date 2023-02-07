import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import { View } from 'react-native';
import { ProductScreen } from '../screens/ProductScreen';
import { ProductsScreen } from '../screens/ProductsScreen';

export type ProductsStackParams = {
  ProductScreen: undefined,
  ProductsScreen: {
    id?: string,
    name?: string
  }
}

const Stack = createStackNavigator<ProductsStackParams>();

export const ProductsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'black'
        },
        headerStyle: {
          backgroundColor: 'yellow'
        }
      }}
    >
      <Stack.Screen
        name='ProductsScreen'
        component={ProductsScreen}
        options={{
          title: "Productos"
        }}
      />
      <Stack.Screen
        name='ProductScreen'
        component={ProductScreen}
      />
    </Stack.Navigator>
  )
}
