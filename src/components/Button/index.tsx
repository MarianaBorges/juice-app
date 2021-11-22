import React from 'react';

import {
    Container,
    Price,
} from './styles';

import { RectButtonProps } from 'react-native-gesture-handler';

interface Props extends RectButtonProps{
    total: number;
}

export function Button({total, ...rest}:Props){
   return (
      <Container {...rest}>
            <Price>${total}</Price>
            <Price>PAY</Price>
      </Container>
 );
}