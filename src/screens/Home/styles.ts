import { RFValue } from 'react-native-responsive-fontsize';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary}
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.View`
  width: 100%;
  height: 113px;
  justify-content: flex-end;
  padding: 32px 24px;
  background-color: ${({ theme })=> theme.colors.header}
`;

export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme })=> theme.colors.text};
  font-family: ${({ theme })=> theme.fonts.primary_Regular};
`;

export const CarList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 24
  },
  showsVerticalScrollIndicator: false
})``;