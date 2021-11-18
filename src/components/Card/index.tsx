import React from 'react';
import { useTheme } from 'styled-components/native';
import { useCart } from '../../context/cart';

import {
   Container,
   CanImage,
   Footer,
   Content,
   Text,
   TextPrice,
   Icon,
   ButtonIcon
} from './styles';

interface Props{
   data:{
      id: string;
      name: string;
      price: number;
      image: string;
      details: string;
   }
}

export function Card({data}:Props){
   
   const theme = useTheme();
   const { addNewJuice } = useCart();

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
            <ButtonIcon onPress={()=> addNewJuice(data)}>
               <Icon
                  name="md-cart-outline" 
                  size={30}
                  color={theme.colors.write}
               />
            </ButtonIcon>
            
         </Footer>
      </Container>
 );
}