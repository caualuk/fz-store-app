import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useCart } from "../../context/CartContext";
import { useFavorites } from "../../context/FavoritesContext";
import { Ionicons } from "@expo/vector-icons";

export default function ProductDetails({ route, navigation }) {
  const { item } = route.params;
  const { addToCart } = useCart();
  const { addToFavorites } = useFavorites();

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.img} />

      <View style={styles.content}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>

        <Text style={styles.sectionTitle}>Descrição</Text>
        <Text style={styles.description}>
          Camisa de alta qualidade, material respirável, design oficial do time.
        </Text>

        <View style={styles.buttonsRow}>
          <TouchableOpacity
            style={[styles.button, styles.buyButton]}
            onPress={() => {
              addToCart(item);
              Alert.alert("Sucesso", "Item adicionado ao carrinho");
              navigation.navigate("Tabs", { screen: "Carrinho" });
            }}
          >
            <Text style={styles.buttonText}>Comprar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.cartButton]}
            onPress={() => {
              addToCart(item);
              Alert.alert("Sucesso", "Item adicionado ao carrinho");
              navigation.navigate("Tabs", { screen: "Carrinho" });
            }}
          >
            <Text style={styles.buttonText}>
              <Ionicons name="cart" size={20} color="#fff" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.favoriteButton]}
            onPress={() => {
              addToFavorites(item);
              Alert.alert("Sucesso", "Item adicionado aos favoritos");
              navigation.navigate("Tabs", { screen: "Favoritos" });
            }}
          >
            <Text style={styles.buttonText}>
              <Ionicons name="heart" size={20} color="#fff" />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  img: {
    width: "100%",
    height: 350,
  },
  content: {
    padding: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  price: {
    fontSize: 20,
    color: "#0a0",
    fontWeight: "bold",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },
  description: {
    marginTop: 5,
    fontSize: 15,
    color: "#444",
  },
  buttonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 5,
  },
  buyButton: {
    backgroundColor: "#120a8f",
  },
  cartButton: {
    backgroundColor: "#04aaff",
  },
  favoriteButton: {
    backgroundColor: "#ff6b6b",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
