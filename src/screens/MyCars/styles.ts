import styled, {css} from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

interface DateValueProps {
    selected: boolean;
}

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
    width: 100%;
    height: 325px;

    background-color: ${({ theme }) => theme.colors.header};

    justify-content: center;

    padding: 20px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(30)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_SemiBold};

    color: ${({ theme }) => theme.colors.shape};

    margin-top: 24px;
`;

export const RentalPeriod = styled.View`
    width: 100%;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin: 32px 0;
`;

export const SubTitle = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-family:${({ theme }) => theme.fonts.secondary_Medium};
    font-size: ${RFValue(15)}px;

    margin-top: 24px;
`;

export const Content = styled.View`
    flex: 1;
    width: 100%;

    padding: 0 16px;
`;

export const Appointments = styled.View`
    width: 100%;
    
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 24px 0;
`;

export const AppointmentsTitle = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-family:${({ theme }) => theme.fonts.primary_Regular};
    font-size: ${RFValue(15)}px;
`;

export const AppointmentsQuantity = styled.Text`
    color: ${({ theme }) => theme.colors.shape_dark};
    font-family:${({ theme }) => theme.fonts.primary_Medium};
    font-size: ${RFValue(15)}px;
`;

export const CarWapper = styled.View`
    margin-bottom: 16px;
`;

export const CarFooter = styled.View`
    width: 100%;
    padding: 12px;

    margin-top: -10px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const CarFooterTitle = styled.Text`
    color: ${({ theme }) => theme.colors.text_detail};
    font-family: ${({ theme }) => theme.fonts.secondary_Regular};
    font-size: ${RFValue(10)}px;
`;

export const CarFooterPeriod = styled.View`
    flex-direction: row;
`;

export const CarFooterDate = styled.Text`
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.primary_Medium};
    font-size: ${RFValue(13)}px;
`;

