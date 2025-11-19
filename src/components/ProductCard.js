import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProductCard({ item }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.img} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#120a8f",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    elevation: 3
  },
  img: {
    width: "100%",
    height: 180,
    borderRadius: 10
  },
  name: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  price: {
    marginTop: 5,
    color: "#0A84FF",
    fontSize: 15,
    fontWeight: "bold"
  }
});
