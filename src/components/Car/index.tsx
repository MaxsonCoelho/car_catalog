import React from 'react'
import { Container, Details, Brand, Name,
    About, Rent, Period, Price, Type, CarImage } from './styles';
import Gasoline from '../../assets/img/gasoline.svg';
import { TouchableOpacityProps } from 'react-native';
import { CarDTO } from '../../dtos/carDTO';

    interface Props extends TouchableOpacityProps {
        data: CarDTO;
    }

export default function Car({data, ...rest}: Props) {

    
  return (
    <Container {...rest}>
        <Details>
            <Brand>{data.brand}</Brand>
            <Name>{data.name}</Name>

            <About>
                <Rent>
                    <Period>{data.rent.period}</Period>
                    <Price>{`R$ ${data.rent.price}`}</Price>
                </Rent>

                <Type>
                    <Gasoline />
                </Type>
            </About>
        </Details>
        <CarImage source={{ uri: data.thumbnail }} resizeMode="contain" />
    </Container>
  )
}

