import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppBar() {
  return (
    <View style={styles.appBar}>
      <Text style={styles.title}>Mon Application Élégante</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    height: 60,
    backgroundColor: '#1E3A8A',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#F8E9EB',
  },
  title: {
    color: '#FFFFFF', 
    fontSize: 20,
    fontWeight: '700',
  },
});