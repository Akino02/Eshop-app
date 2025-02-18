import { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet, ScrollView } from "react-native";
import { getAllProducts } from "./models/db_connects";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllProducts();
    if (data.status === 500 || data.status === 404) {
      setLoaded(null);
      return;
    }
    if (data.status === 200) {
      setProducts(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return <Text>Products not found</Text>;
  }

  if (!isLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {products.map((product, index) => (
        <View key={index} style={styles.productBox}>
          <Text numberOfLines={1}>{product.title}</Text>
          <Text>{product.category}</Text>
          <Text numberOfLines={2}>{product.description}</Text>
          <Text>{product.cost} Kč</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 16,
  },
  productBox: {
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    width: '32%',
    minHeight: 150,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
});
