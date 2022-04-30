/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/screens/styles/theme';
import { ActivityIndicator, View } from 'react-native';
import Home from './src/screens/Home';


export default function App() {

  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    setTimeout(()=> {setLoading(false)}, 3000)
  }, []);

  return !loading ? 
    <ThemeProvider theme={theme}>
      <Home /> 
    </ThemeProvider>
  : 
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator color='#ccc' size='large' />
    </View>;
}
