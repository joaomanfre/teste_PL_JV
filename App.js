// App.js
import React from 'react';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Home from './pages/Home';
import Pedido from './pages/Pedido'; // Certifique-se de importar Pedido

function App() {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pedido" element={<Pedido />} /> {/* Adicione esta linha */}
      </Routes>
    </NativeRouter>
  );
}

export default App;
