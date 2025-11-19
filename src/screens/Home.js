import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import TeamButton from '../components/TeamButton';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Home() {
  
  const teams = [
    "Flamengo",
    "Corinthians",
    "Palmeiras",
    "Real Madrid",
    "Barcelona",
    "PSG"
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* HEADER */}
      <Text style={styles.header}>FZ STORE</Text>

      {/* Pergunta */}
      <Text style={styles.title}>O que você procura hoje?</Text>

      {/* Input */}
      <TextInput 
        style={styles.input}
        placeholder="Buscar camisas..."
        placeholderTextColor="#777"
      />

      {/* Times */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.teamScroll}
      >
        {teams.map((team, index) => (
          <TeamButton key={index} title={team} />
        ))}
      </ScrollView>

      {/* Produtos */}
      <View style={styles.productsContainer}>
        {products.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: "#F5F5F5"
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#120A8F" 
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 15,
    color: "#120A8F"
  },
  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 20
  },
  teamScroll: {
    marginBottom: 25,
  },
  productsContainer: {
    paddingBottom: 30
  }
});