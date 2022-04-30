/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import Home from './src/screens/Home';


export default function App() {

  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    setTimeout(()=> {setLoading(false)}, 3000)
  }, []);

  return !loading ? 
    <Home /> 
  : 
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator color='#ccc' size='large' />
    </View>;
}
