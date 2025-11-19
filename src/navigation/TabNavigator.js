import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AnimatedTabIcon from '../components/AnimatedTabIcon';
import Home from '../screens/Home';
import { View, Text } from 'react-native';

function CarrinhoScreen() {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Carrinho</Text>
    </View>
  );
}

function FavoritosScreen() {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Favoritos</Text>
    </View>
  );
}

function PerfilScreen() {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Perfil</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          height: 65,
          paddingBottom: 12,
          paddingTop: 12,
        },
        tabBarItemStyle: {
          height: 70,
          alignItems: "center",
          justifyContent: "center",
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#777"
      }}
    >
      <Tab.Screen 
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <AnimatedTabIcon name="home-outline" focused={focused} color={color} />
          )
        }}
      />

      <Tab.Screen 
        name="Carrinho"
        component={CarrinhoScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <AnimatedTabIcon name="cart-outline" focused={focused} color={color} />
          )
        }}
      />

      <Tab.Screen 
        name="Favoritos"
        component={FavoritosScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <AnimatedTabIcon name="heart-outline" focused={focused} color={color} />
          )
        }}
      />

      <Tab.Screen 
        name="Perfil"
        component={PerfilScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <AnimatedTabIcon name="person-outline" focused={focused} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
}
