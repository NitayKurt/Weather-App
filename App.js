import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View>
      <Text style={styles.header}>Weather</Text>
      <Text style={styles.header}>Weather</Text>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 20,
  },
})