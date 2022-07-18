import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components';
import { ptBR } from './localeConfig';

import { generateInterval } from './generateInterval';
import { 
    Calendar as CustomCalendar,
    LocaleConfig
 } from 'react-native-calendars';


 LocaleConfig.locales['pt-br'] = ptBR;
 LocaleConfig.defaultLocale = 'pt-br';

 interface MarkedDateProps {
    [date: string]: {
        color: string;
        textColor: string;
        disabled?: boolean;
        disableTouchEvent?: boolean;
    }
 }

 interface DayProps {
    dateString: string;
    day: number;
    month: number;
    timestamp: number;
    year: number;
 }

 interface CalendarProps {
    markedDates: MarkedDateProps;
    onDayPress: any;
 }

function Calendar({ markedDates, onDayPress }: CalendarProps){
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
            markingType="period"
            markedDates={markedDates}
            onDayPress={onDayPress}
        />
    );
}

export {
    MarkedDateProps,
    DayProps,
    Calendar,
    generateInterval
}