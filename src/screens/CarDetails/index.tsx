import React from 'react';
import Acessory from '../../components/Acessory';
import BackButton from '../../components/BackButon';
import Button from '../../components/Button';
import ImageSlider from '../../components/ImageSlider';

import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

import { CarDTO } from '../../dtos/carDTO';

import { useNavigation, useRoute } from '@react-navigation/native';

import { 
  Container, 
  Header, 
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Acessories,
  Footer
} from './styles';

interface Params {
  car: CarDTO;
}


export function CarDetails() {

  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;

  function handleBack() {
    navigation.goBack();
  }

  function handleScheduling() {
    navigation.navigate('Scheduling');
  }


  return (
    <Container>
        <Header>
          <BackButton onPress={handleBack} />
        </Header>

        <CarImages>
          <ImageSlider imagesUrl={car.photos} />
        </CarImages>

        <Content>
          <Details>
            <Description>
              <Brand>{car.brand}</Brand>
              <Name>{car.name}</Name>
            </Description>

            <Rent>
              <Period>{car.rent.period}</Period>
              <Price>R$ {car.rent.price}</Price>
            </Rent>
          </Details>

          <Acessories>
            {
              car.accessories.map(accessory => (
                <Acessory 
                  key={accessory.type}
                  name={accessory.name} 
                  icon={getAccessoryIcon(accessory.type)} 
                />
              ))
            }
          </Acessories>

          <About>{car.about}</About>
        </Content>

        <Footer>
          <Button title="Escolher período do aluguel" onPress={handleScheduling} />
        </Footer>
    </Container>
  );
}