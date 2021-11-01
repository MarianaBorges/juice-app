import React,{ReactNode} from 'react';

import {
Container
} from './styles';

import {useTheme} from 'styled-components/native';

interface Props{
  children: ReactNode;
}

export function Background({children}:Props){
  
  const theme = useTheme();

   return (
      <Container
        colors={[theme.colors.background, 
                theme.colors.background, 
                theme.colors.background, 
                theme.colors.background, 
                theme.colors.backgroundTwo, 
                theme.colors.background]}
      >
        {children}
      </Container>
 );
}