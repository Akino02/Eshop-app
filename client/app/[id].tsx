import { StyleSheet, Image, Platform, ActivityIndicator, Text} from 'react-native';

import { useEffect, useState } from 'react';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useLocalSearchParams } from 'expo-router';
import {getProductById} from "./models/db_connects"

type ProductType = {
  _id: string,
  title: string,
  category: string,
  description: string,
  cost: number
}

export default function ProductView() {
  const {id} = useLocalSearchParams<{ id:string }>()
  const [products, setProduct] = useState<ProductType>();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
      const data = await getProductById(id);
      if (data.status === 500 || data.status === 404) {
        setLoaded(false);
        return;
      }
      if (data.status === 200) {
        setProduct(data.payload);
        setLoaded(true);
      }
      console.log(products)
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
    <ThemedView style={styles.container}>
      <ThemedText>
        {products?._id}
      </ThemedText>
    </ThemedView>
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
    height: "100%",
  },
});

