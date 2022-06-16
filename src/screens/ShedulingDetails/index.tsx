import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { RFValue } from 'react-native-responsive-fontsize';

import Acessory from '../../components/Acessory';
import BackButton from '../../components/BackButon';
import Button from '../../components/Button';
import ImageSlider from '../../components/ImageSlider';

import speedSvg from '../../assets/img/speed.svg';
import accelerationSvg from '../../assets/img/acceleration.svg';
import forceSvg from '../../assets/img/force.svg';
import gasolineSvg from '../../assets/img/gasoline.svg';
import exchangeSvg from '../../assets/img/exchange.svg';
import peopleSvg from '../../assets/img/people.svg';

import { useNavigation } from '@react-navigation/native';

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
  Acessories,
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


export function SchedulingDetails() {

  const navigation = useNavigation();
  const theme = useTheme();

  function handleConfirmRental() {
    navigation.navigate('ShedulingComplete');
  }

  return (
    <Container>
        <Header>
          <BackButton />
        </Header>

        <CarImages>
          <ImageSlider imagesUrl={['https://www.pngmart.com/files/10/White-Audi-PNG-Transparent-Image.png']} />
        </CarImages>

        <Content>
          <Details>
            <Description>
              <Brand>Audi</Brand>
              <Name>A4</Name>
            </Description>

            <Rent>
              <Period>Ao dia</Period>
              <Price>R$ 580</Price>
            </Rent>
          </Details>

          <Acessories>
            <Acessory name='380Km/h' icon={speedSvg} />
            <Acessory name='3.2s' icon={accelerationSvg} />
            <Acessory name='800 HP' icon={forceSvg} />
            <Acessory name='Gasolina' icon={gasolineSvg} />
            <Acessory name='Auto' icon={exchangeSvg} />
            <Acessory name='2 pessoas' icon={peopleSvg} />
          </Acessories>

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
              <DateValue>18/06/2021</DateValue>
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
              <DateValue>18/06/2021</DateValue>
            </DateInfo>

          </RentalPeriod>
          <RentalPrice>
            <RentalPriceLabel>TOTAL</RentalPriceLabel>
            <RentalPriceDetails>
              <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
              <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
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