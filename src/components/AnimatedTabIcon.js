import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, { 
  useAnimatedStyle, 
  withTiming 
} from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';

export default function AnimatedTabIcon({ name, focused, color }) {

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(focused ? "#120a8f" : "transparent", { duration: 250 }),
      paddingHorizontal: withTiming(focused ? 8 : 10, { duration: 250 }),
      paddingVertical: withTiming(focused ? 6 : 4, { duration: 250 }),
      borderRadius: 20,
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Ionicons name={name} size={26} color={focused ? "#fff" : color} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 45,
    minWidth: 45,
    justifyContent: "center",
    alignItems: "center",
  }
});
