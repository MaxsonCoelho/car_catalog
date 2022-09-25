import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { RFValue } from 'react-native-responsive-fontsize';

import Accessory from '../../components/Acessory';
import BackButton from '../../components/BackButon';
import Button from '../../components/Button';
import ImageSlider from '../../components/ImageSlider';
import { CarDTO } from '../../dtos/carDTO';

import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import api from '../../services/api';
import { useNavigation, useRoute } from '@react-navigation/native';

import { useTheme } from 'styled-components';

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
  Accessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal
} from './styles';
import { Alert } from 'react-native';


interface Params {
  car: CarDTO;
  dates: string[];
  rentalPeriod: {
    startFormatted: string;
    endFormatted: string;
  }
}

interface RentalPeriod {
  start: string;
  end: string;
}

export function SchedulingDetails() {

  const navigation = useNavigation();
  const route = useRoute();
  const { car, dates, rentalPeriod } = route.params as Params;
  const rentalTotal = Number(dates.length * car.rent.price);
  const theme = useTheme();

  async function handleConfirmRental() {
    const scheduleByCar = await api.get(`/schedules_bycars/${car.id}`)

    const unavailable_dates = [
      ...scheduleByCar.data.unavailable_dates,
      ...dates,
    ]

    await api.post('schedules_byuser', {
      user_id: 1,
      car
    })

    api.put(`/schedules_bycars/${car.id}`, {
      id: car.id,
      unavailable_dates
    })
    .then(response => navigation.navigate('ShedulingComplete'))
    .catch(() => Alert.alert('Não foi possível confirmar o agendamento.'))
    
  }

  function handleBack() {
    navigation.goBack();
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

          <Accessories>
            {car.accessories.map(accesory => (
              <Accessory 
                key={accesory.type}
                name={accesory.name}
                icon={getAccessoryIcon(accesory.type)} 
              />
            ))}
          </Accessories>

          <RentalPeriod>
            <CalendarIcon>
              <Icon 
                name="calendar"
                size={RFValue(24)}
                color={theme.colors.shape}
              />
            </CalendarIcon>
            <DateInfo>
              <DateTitle>DE</DateTitle>
              <DateValue>{rentalPeriod.startFormatted}</DateValue>
            </DateInfo>

            <CalendarIcon>
              <Icon 
                name="chevron-right"
                size={RFValue(10)}
                color={theme.colors.shape}
              />
            </CalendarIcon>
            <DateInfo>
              <DateTitle>DE</DateTitle>
              <DateValue>{rentalPeriod.endFormatted}</DateValue>
            </DateInfo>

          </RentalPeriod>
          <RentalPrice>
            <RentalPriceLabel>TOTAL</RentalPriceLabel>
            <RentalPriceDetails>
              <RentalPriceQuota>{`R$ ${car.rent.price} x${dates.length} diárias`}</RentalPriceQuota>
              <RentalPriceTotal>R$ {rentalTotal}</RentalPriceTotal>
            </RentalPriceDetails>
          </RentalPrice>
        </Content>

        <Footer>
          <Button 
            title="Alugar agora" 
            color={theme.colors.success}
            onPress={handleConfirmRental} 
          />
        </Footer>

    </Container>
  );
}