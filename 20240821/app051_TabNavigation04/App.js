/* Aula 20 - Tab Navigation, Parte 2 - Desafio 1 */

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
/* Não esqueça das chaves na hora de importar bibliotecas, componentes não precisam de chaves, fique atento! */

import Inicial from './source/Inicial';
import Comentarios from './source/Comentarios';
import Cadastro from './source/Cadastro';
import Galeria from './source/Galeria';

function App() {
  const Guia = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <StatusBar />

      <Guia.Navigator>
        <Guia.Screen name='Home' component={ Inicial } />
        <Guia.Screen name='Galeria' component={ Galeria } />
        <Guia.Screen name='Comentarios' component={ Comentarios } />
        <Guia.Screen name='Cadastro' component={ Cadastro } />
      </Guia.Navigator>
    </NavigationContainer>
  )
}

export default App;