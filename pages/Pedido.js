// src/pages/Pedido.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const categorias = {
  Filé: [
    { nome: 'Filé Simples', preco: 10 },
    { nome: 'Filé Bacon', preco: 15 },
    // Adicione mais lanches na categoria Filé aqui
  ],
  // Adicione mais categorias aqui
};

function Pedido() {
  const [pedido, setPedido] = useState([]);

  const adicionarLanche = (lanche) => {
    setPedido([...pedido, lanche]);
  };

  const removerLanche = (lanche) => {
    setPedido(pedido.filter(item => item !== lanche));
  };

  const contarLanches = (lanche) => {
    return pedido.filter(item => item === lanche).length;
  };

  const lanchesUnicos = [...new Set(pedido)];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Selecione seu lanche:</Text>
      {Object.keys(categorias).map((categoria, index) => (
        <View key={index}>
          <Text style={styles.text}>{categoria}</Text>
          {categorias[categoria].map((lanche, index) => (
            <View key={index} style={styles.lancheContainer}>
              <Text>{lanche.nome}</Text>
              <Button
                title="-"
                onPress={() => removerLanche(lanche)}
              />
              <Text>{contarLanches(lanche)}</Text>
              <Button
                title="+"
                onPress={() => adicionarLanche(lanche)}
              />
            </View>
          ))}
        </View>
      ))}
      <Text style={styles.text}>Pedido ({pedido.length} lanches):</Text>
      {lanchesUnicos.map((lanche, index) => (
        <Text key={index}>{lanche.nome} ({contarLanches(lanche)})</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 16,
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
  lancheContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Pedido;
