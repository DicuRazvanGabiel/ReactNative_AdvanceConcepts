import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SingupForm from './components/SingupForm';

export default function App() {
  return (
    <View style={styles.container}>
      <SingupForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
