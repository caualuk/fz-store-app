import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Modal,
  TextInput,
} from "react-native";
import { useCart } from "../../context/CartContext";
import { useFavorites } from "../../context/FavoritesContext";
import { Ionicons } from "@expo/vector-icons";

export default function ProductDetails({ route, navigation }) {
  const { item } = route.params;
  const { addToCart } = useCart();
  const { addToFavorites } = useFavorites();
  const [showQuantityModal, setShowQuantityModal] = useState(false);
  const [quantity, setQuantity] = useState("1");

  const handleAddToCart = (qty) => {
    const numQty = parseInt(qty, 10);
    if (!numQty || numQty < 1) {
      Alert.alert("Erro", "Digite uma quantidade válida");
      return;
    }
    for (let i = 0; i < numQty; i++) {
      addToCart(item);
    }
    Alert.alert("Sucesso", `${numQty} item(ns) adicionado(s) ao carrinho`);
    setShowQuantityModal(false);
    setQuantity("1");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.image }}
          style={styles.img}
          resizeMode="contain"
        />
      </View>

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
            onPress={() => setShowQuantityModal(true)}
          >
            <Text style={styles.buttonText}>Comprar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.cartButton]}
            onPress={() => setShowQuantityModal(true)}
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

      <Modal
        visible={showQuantityModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowQuantityModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Quantidade</Text>
            <TextInput
              style={styles.quantityInput}
              placeholder="Digite a quantidade"
              keyboardType="number-pad"
              value={quantity}
              onChangeText={setQuantity}
            />
            <View style={styles.modalButtonsRow}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => {
                  setShowQuantityModal(false);
                  setQuantity("1");
                }}
              >
                <Text style={styles.modalButtonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.confirmButton]}
                onPress={() => handleAddToCart(quantity)}
              >
                <Text style={styles.modalButtonText}>Adicionar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    width: "100%",
    height: 400,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  img: {
    width: "80%",
    height: "100%",
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
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    paddingHorizontal: 25,
    paddingVertical: 30,
    borderRadius: 15,
    width: "85%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#120a8f",
    marginBottom: 15,
    textAlign: "center",
  },
  quantityInput: {
    borderWidth: 1,
    borderColor: "#120a8f",
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  modalButtonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: "#ccc",
  },
  confirmButton: {
    backgroundColor: "#120a8f",
  },
  modalButtonText: {
    fontWeight: "600",
    fontSize: 15,
    color: "#fff",
  },
});
