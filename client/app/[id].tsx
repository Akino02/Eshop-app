import { StyleSheet, ActivityIndicator, Text} from 'react-native';

import { useEffect, useState } from 'react';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useLocalSearchParams } from 'expo-router';
import {getProductById} from "./models/db_connects"

import {Product} from "../types/product"
import { useProducts } from '@/hooks/useProducts';


export default function ProductView() {
  const {id} = useLocalSearchParams<{ id:string }>()
  const {product} = useProducts(id)
  const [isLoaded, setLoaded] = useState(false);

  //Budeme lovati
  //https://www.xe.com/currencyconverter/convert/?Amount=1&From=USD&To=ZWL
  const bigMONEY = 66081.147

  /*const load = async () => {
      const data = await getProductById(id);
      if (data.status === 500 || data.status === 404) {
        setLoaded(false);
        return;
      }
      if (data.status === 200) {
        setProduct(data.payload);
        setLoaded(true);
      }
      //console.log(product)
    };
  
    useEffect(() => {
      load();
    }, []);
  
  if (isLoaded === null) {
    return <Text>Products not found</Text>;
  }
  
  if (!isLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }*/

  if (product){
    return (
      <ThemedView style={styles.container}>
        <ThemedText>
          {product?._id}
        </ThemedText>
        <ThemedText>
          {product?.title}
        </ThemedText>
        <ThemedText>
          {product?.category}
        </ThemedText>
        <ThemedText>
          {product?.description}
        </ThemedText>
        <ThemedText>
          {product?.cost*bigMONEY} Z$
        </ThemedText>
      </ThemedView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "column",
    gap: 16,
    height: "100%",
  },
  
});

