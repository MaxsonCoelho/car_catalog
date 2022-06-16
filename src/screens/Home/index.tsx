import React from 'react';
import { StatusBar } from 'react-native';
import { Container, Header, TotalCars, HeaderContent, CarList } from './styles';
import { RFValue } from 'react-native-responsive-fontsize';
import Logo from '../../assets/img/logo.svg';
import Car from '../../components/Car';

import { useNavigation } from '@react-navigation/native';

export function Home() {

  const navigation = useNavigation();

  const carData = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
        period: 'AO DIA',
        price: '120',
    },
    thumbnail: 'https://www.pngmart.com/files/10/White-Audi-PNG-Transparent-Image.png',
  }

  function handleCarDetails() {
    navigation.navigate('CarDetails');
  }

  return (
    <Container>
      <StatusBar 
      barStyle='light-content' 
      backgroundColor='transparent'
      translucent
      />
      <Header>
        <HeaderContent>
          <Logo 
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
      <CarList 
        data={[1,2, 3]}
        keyExtractor={item => String(item)}
        renderItem={({ item })=> 
          <Car data={carData} onPress={handleCarDetails} />}
      />
    </Container>
  );
}
