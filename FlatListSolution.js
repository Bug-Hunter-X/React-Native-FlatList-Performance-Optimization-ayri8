This solution uses the `windowSize` and `removeClippedSubviews` props to optimize FlatList performance.
```javascript
import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

const data = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);

const OptimizedFlatList = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      keyExtractor={(item) => item}
      windowSize={10} // Render only 10 items at a time
      removeClippedSubviews={true} // Remove off-screen items
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default OptimizedFlatList;
```