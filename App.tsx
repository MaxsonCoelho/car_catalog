/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/screens/styles/theme';
import { View, StatusBar } from 'react-native';
import { Routes } from './src/routes';
import LogoSvg from './src/assets/img/logo.svg'


export default function App() {

  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    setTimeout(()=> {setLoading(false)}, 4000)
  }, []);

  return !loading ? 
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle='light-content'
        translucent
        backgroundColor='transparent'
      />
      <Routes />
    </ThemeProvider>
  : 
    <View style={{flex: 1, alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: theme.colors.header}}>
        <LogoSvg />
    </View>;
}
