// src/pages/Home.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles/Home';
import { useNavigate } from 'react-router-native';

function Home() {
  const navigate = useNavigate();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Button title="Adicionar pedido" onPress={() => navigate('/pedido')} />
    </View>
  );
}

export default Home;
