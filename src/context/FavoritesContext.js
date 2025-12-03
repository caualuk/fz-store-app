import React, { createContext, useState, useContext } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [items, setItems] = useState([]);

  function addToFavorites(product) {
    setItems((prev) => {
      const exists = prev.find((i) => i.id === product.id);
      if (exists) return prev; // avoid duplicates
      return [...prev, product];
    });
  }

  function removeFromFavorites(id) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  function clearFavorites() {
    setItems([]);
  }

  return (
    <FavoritesContext.Provider
      value={{ items, addToFavorites, removeFromFavorites, clearFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
