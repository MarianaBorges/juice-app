import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AntDesign,MaterialCommunityIcons,Entypo } from '@expo/vector-icons';
import { Home } from '../screens/Home';
import { Cart } from '../screens/Cart';
import { Profile } from '../screens/Profile';
import theme from '../global/styles/theme';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes(){
    return(
        <Navigator  
            screenOptions={{
                tabBarActiveTintColor: theme.colors.pinkCardOne,
                tabBarInactiveTintColor: theme.colors.write,
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle:{
                    backgroundColor: theme.colors.background,
                    borderTopWidth: 0,
                }
            }}
            
          >
            <Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: (({size, color})=>(
                        <AntDesign 
                            name="appstore-o" 
                            size={size} 
                            color={color} 
                        />
                    ))
                }}
            />
            <Screen
                name='Cart'
                component={Cart}
                options={{
                    tabBarIcon: (({size, color})=>(
                        <MaterialCommunityIcons 
                            name="cart-outline" 
                            size={size} 
                            color={color} />
                    ))
                }}
            />
             <Screen
                name='Plus'
                component={Profile}
                options={{
                    tabBarIcon: (({size, color})=>(
                        <AntDesign 
                            name="pluscircle" 
                            size={size+4} 
                            color={theme.colors.pinkCardOne} 
                        />
                    ))
                }}
            />
            <Screen
                name='Bar Chart'
                component={Profile}
                options={{
                    tabBarIcon: (({size, color})=>(
                        <Entypo 
                            name="bar-graph" 
                            size={size} 
                            color={color} />
                    ))
                }}
            />
             <Screen
                name='User'
                component={Profile}
                options={{
                    tabBarIcon: (({size, color})=>(
                        <AntDesign 
                        name="user" 
                        size={size} 
                        color={color} />
                    ))
                }}
            />
        </Navigator>
    )
}
