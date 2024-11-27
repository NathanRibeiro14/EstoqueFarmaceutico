import './gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Inicio from './src/pages/inicio';
import { NavigationContainer } from "@react-navigation/native"
import Routes from './src/routes/routes';
import RoutesStack from './src/routes/index.routes';

export default function App() {
  return (
    <NavigationContainer>
      <RoutesStack />
    </NavigationContainer>
  );
}
