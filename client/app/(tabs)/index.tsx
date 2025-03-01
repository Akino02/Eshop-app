import { StyleSheet, Text } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import ProductList from '../ProductList';
import Title from '../Title';

export default function HomeScreen() {

  return(
    <ThemedView style={styles.contentContainer}>
      <Title/>
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
  titleText:{
    fontSize: 25,
    color: "white"
  },
  contentContainer: {
    height: "100%"
  },
});