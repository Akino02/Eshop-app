import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import Title from '../Title';

export default function Cart() {
  return (
    <ThemedView style={styles.pageContainer}>
      <Title/>
      <ThemedView style={styles.contentContainer}>
        <ThemedText type="title">🚧Shopping Cart🚧</ThemedText>
        <ThemedText>Working on...</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    height: "100%",
  },
  contentContainer:{
    alignItems:"center",
  },
});
