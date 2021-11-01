import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Home';
import { Cart } from '../screens/Cart';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes(){
    return(
        <Navigator  
            screenOptions={{
                headerShown: false
            }}
          >
            <Screen
                name='Home'
                component={Home}
            />
            <Screen
                name='Cart'
                component={Cart}
            />
        </Navigator>
    )
}