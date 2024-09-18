import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Main() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, I am Main Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Main;
