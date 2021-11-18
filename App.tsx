import { StatusBar } from 'expo-status-bar';
import React  from 'react';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic
} from '@expo-google-fonts/poppins'

import { ThemeProvider } from 'styled-components/native';
import { CartProvider } from './src/context/cart';
import theme from './src/global/styles/theme';

import { Routes } from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic
  });

    if(!fontsLoaded)
      return <AppLoading />

  return (
    <CartProvider>
      <ThemeProvider theme={theme}>
        <Routes/>
      </ThemeProvider>
    </CartProvider>
  );
}
