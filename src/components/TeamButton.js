import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function TeamButton({ title }) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#120a8f",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 10
  },
  text: {
    color: "#fff",
    fontWeight: "600"
  }
});
