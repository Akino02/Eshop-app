import { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet, ScrollView, Button } from "react-native";
import { getAllProducts } from "./models/db_connects";

import { Link } from "expo-router";

type ProductType = {
  _id: string,
  title: string,
  category: string,
  description: string,
  cost: number
}

export default function ProductList() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllProducts();
    if (data.status === 500 || data.status === 404) {
      setLoaded(false);
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
        <View key={index}>
          <Link href={{
          pathname: "/[id]",
          params: {id: product._id},
            }}>
              <View style={styles.productBox}>
                <Text style={styles.inBoxTitle} numberOfLines={1}>{product.title}</Text>
                <Text>Category: {product.category}</Text>
                <Text style={styles.inBoxDescription} numberOfLines={1}>Descripion:<br/>{product.description}</Text>
                <Text style={styles.inBoxCost}>
                  <Text>Cost: </Text>
                  <Text>{product.cost} Kč</Text>
                </Text>
              </View>
          </Link>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 16,
  },
  productBox: {
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    width: 200,
    minHeight: 170,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    justifyContent:"space-between",
  },
  inBoxTitle:{
    textAlign: "center",
    fontWeight: "500",
  },
  inBoxDescription:{
    borderRadius: 8,
    backgroundColor: '#c2c2c2',
    padding: 5,
  },
  inBoxCost:{
    textAlign:"right"
  },
});
