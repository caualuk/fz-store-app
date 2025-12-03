import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { useFavorites } from "../../context/FavoritesContext";

export default function Favorites() {
  const { items, removeFromFavorites, clearFavorites } = useFavorites();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favoritos</Text>

      {items.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyText}>Você não tem favoritos ainda.</Text>
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
                <Text style={styles.price}>{item.price}</Text>
              </View>
              <TouchableOpacity
                style={styles.remove}
                onPress={() => removeFromFavorites(item.id)}
              >
                <Text style={{ color: "#fff" }}>Remover</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}

      {items.length > 0 && (
        <TouchableOpacity style={styles.clear} onPress={clearFavorites}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>
            Limpar Favoritos
          </Text>
        </TouchableOpacity>
      )}
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
  clear: {
    backgroundColor: "#120a8f",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
});
