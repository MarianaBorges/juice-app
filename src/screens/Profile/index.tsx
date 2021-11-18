import React from 'react';
import { StatusBar } from 'expo-status-bar';

import {
    Container,
    Title,
} from './styles';

import { Background } from '../../components/Background'

export function Profile(){

   return (
       <Background>
           <StatusBar
                backgroundColor="transparent"
                translucent
            />
            <Container>
                <Title>Profile</Title>
            </Container>
        </Background>
 );
}