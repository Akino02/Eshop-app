import { Image, StyleSheet, Platform, Alert } from 'react-native';

import { useState, useEffect } from 'react';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { getAllProducts } from "../models/db_connects"
import ProductList from '../ProductList';

export default function HomeScreen() {
  const [products, setProducts] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    try{
      const data = await getAllProducts();
      if (data.status === 500 || data.status === 404) return setLoaded(null);
      if (data.status === 200) {
        setProducts(data.payload);
        setLoaded(true);
      }
    }
    catch(error){
      console.error("Error getting all products")
    }
    finally{
      setLoaded(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return(
    <ThemedView style={styles.contentContainer}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText>Title and maybe Search bar ?</ThemedText>
      </ThemedView>
      <ProductList />
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    height: 50,
    alignItems: 'center',
    backgroundColor: "#903030",
    justifyContent: "center",
    gap: 8,
  },
  contentContainer: {
    height: "100%"
  },
});