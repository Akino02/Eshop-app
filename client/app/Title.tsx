import { StyleSheet, Text } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function Title() {

  return(
      <ThemedView style={styles.titleContainer}>
        <Text style={styles.titleText}>Coral Shop</Text>
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
});