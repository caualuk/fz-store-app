import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AnimatedTabIcon from "../components/AnimatedTabIcon";
import Home from "../screens/Home";
import TeamProducts from "../screens/TeamProducts/TeamProducts.js";
import ProductDetails from "../screens/ProductDetails/ProductDetails";
import { View, Text } from "react-native";
import Cart from "../screens/Cart/Cart";
import Favorites from "../screens/Favorites/Favorites";
import { createStackNavigator } from "@react-navigation/stack";

// Carrinho screen moved to /screens/Cart/Cart.js

// Favoritos screen moved to /screens/Favorites/Favorites.js

function PerfilScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Perfil</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

// 🔥 Stack exclusivo da aba Home
function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeMain" component={Home} />
      <HomeStack.Screen name="ProductDetails" component={ProductDetails} />
      <HomeStack.Screen name="TeamProducts" component={TeamProducts} />
    </HomeStack.Navigator>
  );
}

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
        tabBarInactiveTintColor: "#777",
      }}
    >
      {/* 🔥 Aba Home agora usa um Stack */}
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <AnimatedTabIcon
              name="home-outline"
              focused={focused}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Carrinho"
        component={Cart}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <AnimatedTabIcon
              name="cart-outline"
              focused={focused}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Favoritos"
        component={Favorites}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <AnimatedTabIcon
              name="heart-outline"
              focused={focused}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
