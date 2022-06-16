import React from 'react';
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


export function CarDetails() {
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

          <About>
            Este é o automóvel desportivo. Surgiu do lendário
            touro de lide indultado na praça Real Maestranza se Sevilla.
          </About>
        </Content>

        <Footer>
          <Button title="Confirmar" />
        </Footer>
    </Container>
  );
}