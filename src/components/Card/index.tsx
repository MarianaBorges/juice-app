import React from 'react';
import { useTheme } from 'styled-components/native';

import {
   Container,
   CanImage,
   Footer,
   Content,
   Text,
   TextPrice,
   Icon
} from './styles';

interface Props{
   data:{
      id: number;
      name: string;
      price: string;
      image: string;
   }
}

export function Card({data}:Props){
   
   const theme = useTheme();

   return (
      <Container>
         <CanImage 
            source={{
               uri: data.image
            }}
         />
         <Footer>
            <Content>
               <Text>
                  {data.name}{'\n'}
                  <TextPrice>${data.price}</TextPrice>
               </Text> 
            </Content>
            <Icon
               name="md-cart-outline" 
               size={30}
               color={theme.colors.write}
            />
         </Footer>
      </Container>
 );
}