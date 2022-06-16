import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';

import LogoSvg from '../../assets/img/logo_background_gray.svg';
import DoneSvg from '../../assets/img/done.svg';

import { ConfirmButton } from '../../components/ConfirmButton';

import { 
    Container,
    Content,
    Title,
    Message,
    Footer
} from './styles';


export function ShedulingComplete(){
    const { width } = useWindowDimensions();

    return (
        <Container>
            <LogoSvg width={width} />

            <Content>
                <DoneSvg width={80} height={80} />
                <Title>Carro alugado</Title>

                <Message>
                    Agora você só precisa ir {'\n'}
                    até a concessionária da RENTX {'\n'}
                    pegar o seu automóvel
                </Message>
            </Content>

            <Footer>
                <ConfirmButton title='OK' />
            </Footer>
        </Container>
    );
}