import React from 'react';
import BackButton from '../components/BackButon';

import { Container, Header } from './styles';


export default function CarDetails() {
  return (
    <Container>
        <Header>
          <BackButton />
        </Header>
    </Container>
  );
}