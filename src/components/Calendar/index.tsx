import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components';

import { 
    LocaleConfig,
    Calendar as CustomCalendar
 } from 'react-native-calendars';


 LocaleConfig.locales['pt-br'] = {
     monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
     monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
     dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
     dayNamesShort: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'],
     today: 'Hoje'
 }
 LocaleConfig.defaultLocale = 'pt-br';

export function Calendar(){
    const theme = useTheme();
    const today = new Date();
    
    return (
        <CustomCalendar 
            renderArrow={( direction ) => 
                <Icon 
                    size={20}
                    color={theme.colors.text}
                    name={direction == 'left' ? 'chevron-left' : 'chevron-right'}
                />
            }

            headerStyle={{
                backgroundColor: theme.colors.background_primary,
                borderBottomWidth:0.5,
                borderBottomColor: theme.colors.text_detail,
                paddingBottom: 10,
                marginBottom: 10
            }}

            theme={{
                textDayFontFamily: theme.fonts.primary_Regular,
                textDayHeaderFontFamily: theme.fonts.primary_Medium,
                textDayHeaderFontSize: 10,
                textMonthFontFamily: theme.fonts.secondary_SemiBold,
                textMonthFontSize: 20,
                monthTextColor: theme.colors.title,
                arrowStyle: {
                    marginHorizontal: -15
                }
            }}

            firstDay={1}
            minDate={today.toString()}
        />
    );
}