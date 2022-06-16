import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/ShedulingDetails';
import { ShedulingComplete } from '../screens/ShedulingComplete';

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
        </Navigator>
    )
}