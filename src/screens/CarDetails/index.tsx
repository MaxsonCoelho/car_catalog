import React from 'react';
import BackButton from '../../components/BackButon';
import Button from '../../components/Button';
import ImageSlider from '../../components/ImageSlider';

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
  Footer
} from './styles';


export default function CarDetails() {
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

          <About>
            Este é o automóvel desportivo. Surgiu do lendário
            touro de lide indultado na praça Real Maestranza se Sevilla.
            É um belíssimo carro para quem gosta de acelerar.
            Este é o automóvel desportivo. Surgiu do lendário
            touro de lide indultado na praça Real Maestranza se Sevilla.
            É um belíssimo carro para quem gosta de acelerar.
            Este é o automóvel desportivo. Surgiu do lendário
            touro de lide indultado na praça Real Maestranza se Sevilla.
            É um belíssimo carro para quem gosta de acelerar.
            Este é o automóvel desportivo. Surgiu do lendário
            touro de lide indultado na praça Real Maestranza se Sevilla.
            É um belíssimo carro para quem gosta de acelerar.
            Este é o automóvel desportivo. Surgiu do lendário
            touro de lide indultado na praça Real Maestranza se Sevilla.
            É um belíssimo carro para quem gosta de acelerar.
            Este é o automóvel desportivo. Surgiu do lendário
            touro de lide indultado na praça Real Maestranza se Sevilla.
            É um belíssimo carro para quem gosta de acelerar.
          </About>
        </Content>

        <Footer>
          <Button title="Confirmar" />
        </Footer>

    </Container>
  );
}