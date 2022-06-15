/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/screens/styles/theme';
import { ActivityIndicator, View, StatusBar } from 'react-native';
import Home from './src/screens/Home';
import CarDetails from './src/screens/CarDetails';
import { Scheduling } from './src/screens/Scheduling';
import SchedulingDetails from './src/screens/ShedulingDetails';
import { ShedulingComplete } from './src/screens/ShedulingComplete';


export default function App() {

  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    setTimeout(()=> {setLoading(false)}, 3000)
  }, []);

  return !loading ? 
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle='light-content'
        translucent
        backgroundColor='transparent'
      />
      <ShedulingComplete />
    </ThemeProvider>
  : 
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator color='#ccc' size='large' />
    </View>;
}
