import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import ProductDetails from '../screens/ProductDetails/ProductDetails'; // ⬅️ importe a tela de detalhes

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      
      {/* Tela principal com as tabs */}
      <Stack.Screen name="Tabs" component={TabNavigator} />

      {/* Tela de detalhes do produto */}
      <Stack.Screen 
        name="ProductDetails" 
        component={ProductDetails} 
        options={{ headerShown: false }} 
      />

    </Stack.Navigator>
  );
}
