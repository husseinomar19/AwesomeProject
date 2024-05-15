import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './src/compnenten/home';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 13,

  },
});
