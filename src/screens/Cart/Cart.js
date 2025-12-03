import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Linking,
  Alert,
} from "react-native";
import { useCart } from "../../context/CartContext";

export default function Cart() {
  const { items, removeFromCart, clearCart } = useCart();

  const total = items.reduce(
    (sum, i) =>
      sum +
      (parseFloat(String(i.price).replace("R$", "").replace(",", ".")) || 0) *
        i.quantity,
    0
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrinho</Text>

      {items.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyText}>Seu carrinho está vazio.</Text>
        </View>
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image source={{ uri: item.image }} style={styles.img} />
              <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>
                  {item.price} x {item.quantity}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.remove}
                onPress={() => removeFromCart(item.id)}
              >
                <Text style={{ color: "#fff" }}>Remover</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}

      <View style={styles.footer}>
        <Text style={styles.total}>
          Total: R$ {total.toFixed(2).replace(".", ",")}
        </Text>
        <TouchableOpacity
          style={[styles.buy, items.length === 0 && styles.buyDisabled]}
          onPress={() => {
            if (items.length === 0) {
              Alert.alert(
                "Carrinho vazio",
                "Adicione produtos antes de finalizar."
              );
              return;
            }
            
            const storePhone = "558193995599";

            // Monta a lista de itens com nome e quantidade
            const itemsText = items
              .map((it) => `- ${it.name} x${it.quantity} (${it.price})`)
              .join("\n");

            const message = `Olá, gostaria de finalizar a compra:%0A%0A${encodeURIComponent(
              itemsText
            )}%0A%0ATotal: R$ ${total.toFixed(2).replace(".", ",")}`;

            const url = `https://api.whatsapp.com/send?phone=${storePhone}&text=${message}`;

            Linking.canOpenURL(url)
              .then((supported) => {
                if (!supported) {
                  Alert.alert(
                    "WhatsApp não disponível",
                    "Não foi possível abrir o WhatsApp neste dispositivo."
                  );
                } else {
                  return Linking.openURL(url);
                }
              })
              .catch((err) => {
                console.error("Erro ao abrir URL:", err);
                Alert.alert("Erro", "Não foi possível abrir o WhatsApp.");
              });
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>
            Finalizar Compra
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#120a8f",
  },
  empty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    color: "#777",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 10,
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  name: {
    fontWeight: "600",
  },
  price: {
    marginTop: 4,
    color: "#120a8f",
  },
  remove: {
    backgroundColor: "#ff6b6b",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  footer: {
    paddingVertical: 20,
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#eee",
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  buy: {
    backgroundColor: "#120a8f",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buyDisabled: {
    opacity: 0.5,
  },
});
