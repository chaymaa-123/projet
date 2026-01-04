import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppBar() {
  return (
    <View style={styles.appBar}>
      <Text style={styles.title}>Design </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    height: 60,
    backgroundColor: '#121212', // Noir Profond
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#FFD700', // Or Pâle
  },
  title: {
    color: '#FFFFFF', // Texte Blanc
    fontSize: 20,
    fontWeight: '700',
  },
});