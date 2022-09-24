import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import Logo from '../../assets/img/logo.svg';
import Car from '../../components/Car';
import Icon from 'react-native-vector-icons/Ionicons';

import api from '../../services/api';
import { CarDTO } from '../../dtos/carDTO';

import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { Load } from '../../components/Load';
import { 
  Container, 
  Header, 
  TotalCars, 
  HeaderContent, 
  CarList, 
  MyCarsButton 
} from './styles';

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const theme = useTheme();

  const navigation = useNavigation();

  function handleCarDetails(car: CarDTO) {
    navigation.navigate('CarDetails', { car });
  }

  function handleOpenMyCars() {
    navigation.navigate('MyCars');
  }

  useEffect(() => {
    async function fetchCars() {
      try{
        const response = await api.get('/cars')
        setCars(response.data)
      }
      catch(e) {
        console.log(e);
      }finally {
        setLoading(false);
      }
    }
    fetchCars();
  }, [])

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
          <TotalCars>Total de {cars.length} carros</TotalCars>
        </HeaderContent>
      </Header>
      {loading ? <Load /> :
        <CarList 
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item })=> 
            <Car data={item} onPress={() => handleCarDetails(item)} />}
        />
      }

      <MyCarsButton onPress={handleOpenMyCars} activeOpacity={0.7}>
        <Icon 
          name="ios-car-sport"
          size={32}
          color={theme.colors.shape}
        />
      </MyCarsButton>
    </Container>
  );
}
