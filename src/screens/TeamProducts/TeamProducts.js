import React, { useMemo } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ProductCard from "../../components/ProductCard";
import { products } from "../../data/products";

export default function TeamProducts({ route }) {
  const { team } = route.params || { team: "" };

  const teamProducts = useMemo(() => {
    if (!team) return products;
    return products.filter(
      (p) => p.team && p.team.toLowerCase() === team.toLowerCase()
    );
  }, [team]);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.header}>{team}</Text>
      <View style={styles.productsContainer}>
        {teamProducts.length === 0 ? (
          <View style={styles.noResults}>
            <Text style={styles.noResultsText}>Nenhum produto encontrado.</Text>
          </View>
        ) : (
          teamProducts.map((item) => <ProductCard key={item.id} item={item} />)
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: "#F5F5F5",
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    color: "#120A8F",
    marginBottom: 15,
  },
  productsContainer: {
    paddingBottom: 30,
  },
  noResults: {
    padding: 20,
    alignItems: "center",
  },
  noResultsText: {
    color: "#777",
  },
});
