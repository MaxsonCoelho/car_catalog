import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/ShedulingDetails';
import { ShedulingComplete } from '../screens/ShedulingComplete';
import { MyCars } from '../screens/MyCars';

export function StackRoutes() {
    const { Navigator, Screen } = createNativeStackNavigator();

    return (
        <Navigator  >
            <Screen 
                name='Home'
                component={Home}
                options={{headerShown: false}}
            />
            <Screen 
                name='CarDetails'
                component={CarDetails}
                options={{headerShown: false}}
            />
            <Screen 
                name='Scheduling'
                component={Scheduling}
                options={{headerShown: false}}
            />
            <Screen 
                name='SchedulingDetails'
                component={SchedulingDetails}
                options={{headerShown: false}}
            />
            <Screen 
                name='ShedulingComplete'
                component={ShedulingComplete}
                options={{headerShown: false}}
            />
            <Screen 
                name='MyCars'
                component={MyCars}
                options={{headerShown: false}}
            />
        </Navigator>
    )
}