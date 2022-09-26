import React, { useEffect, useState } from 'react';
import { CarDTO } from '../../dtos/carDTO';
import api from '../../services/api';

import BackButton from '../../components/BackButon';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation, useRoute } from '@react-navigation/native'; 
import { useTheme } from 'styled-components';

import { 
  Container,
  Header,
  Title,
  SubTitle,
  Content,
  Appointments,
  AppointmentsTitle,
  AppointmentsQuantity,
  CarWapper,
  CarFooter,
  CarFooterTitle,
  CarFooterPeriod,
  CarFooterDate

} from './styles';
import { FlatList } from 'react-native-gesture-handler';
import Car from '../../components/Car';

interface CarProps {
  id: string;
  user_id: string;
  start_formated: string;
  end_formated: string;
  car: CarDTO;
}

export function MyCars() {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const route = useRoute();
  // const { car} = route.params as Params;
  const theme = useTheme();

  function handleBack() {
    navigation.goBack();
}

  useEffect(() => {
    async function fetchCars() {
      try{
        const response = await api.get('/schedules_byuser?user_id=1');
        setCars(response.data);
      } catch(e) {
        console.log(e);
      } finally{
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  return (
    <Container>
      <Header>
                
        <BackButton 
            onPress={handleBack}
            color={theme.colors.shape}
        />

        <Title>
            Escolha uma {'\n'} data de início{'\n'}
            e fim do aluguel
        </Title>

        <SubTitle>
            Conforto, Segurança e Praticidate.
        </SubTitle>
      </Header>

      <Content>
        <Appointments>
          <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
          <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
        </Appointments>

        <FlatList 
          data={cars}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <CarWapper>
              <Car data={item.car} />
              <CarFooter>
                <CarFooterTitle>Período</CarFooterTitle>
                <CarFooterPeriod>
                  <CarFooterDate>{item.start_formated}</CarFooterDate>
                  <AntDesign 
                    name="arrowright"
                    size={20}
                    color={theme.colors.title}
                    style={{ marginHorizontal: 10 }}
                  />
                  <CarFooterDate>{item.end_formated}</CarFooterDate>
                </CarFooterPeriod>
              </CarFooter>
            </CarWapper>
          )}
        />
      </Content>
    </Container>
  )
}