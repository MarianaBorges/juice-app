import React from 'react';

import {
    Container,
    Price,
} from './styles';

import { RectButtonProps } from 'react-native-gesture-handler';

interface Props extends RectButtonProps{
    total: string;
}

export function Button({total}:Props){
   return (
      <Container>
            <Price>${total}</Price>
            <Price>PAY</Price>
      </Container>
 );
}