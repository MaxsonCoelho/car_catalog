import React from 'react'
import { Container, Details, Brand, Name,
    About, Rent, Period, Price, Type, CarImage } from './styles';
import Gasoline from '../../assets/img/gasoline.svg';

    interface CarData {
        brand: string;
        name: string;
        rent: {
            period: string;
            price: string;
        }
        thumbnail: string;
    }

    interface Props {
        data: CarData;
    }

export default function Car({data}: Props) {

    
  return (
    <Container>
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

