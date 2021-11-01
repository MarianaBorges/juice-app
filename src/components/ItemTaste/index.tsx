import React from 'react';

import {
   Container,
   Content,
   ContentText,
   FruitView,
   Text
} from './styles';

import AppleSVG from '../../assets/apple.svg';
import { SvgProps } from 'react-native-svg';

interface Props{
   color: string;
   name: string;
   icon: React.FC<SvgProps>;
}

export function ItemTaste({ name, color, icon : Icon }: Props){
   return (
      <Container>
         <Content color={color}>
            <FruitView color={color}>
               <Icon 
                  width={30} 
                  height={30} 
               />
            </FruitView>
         </Content>
         <ContentText>
            <Text>
               {name}
            </Text>
         </ContentText>
      </Container>
 );
}