import React from 'react';
import { SvgProps } from 'react-native-svg';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
   Container,
   Content,
   ContentText,
   FruitView,
   Text
} from './styles';

interface Props extends RectButtonProps{
   color: string;
   name: string;
   icon: React.FC<SvgProps>;
}

export function ItemTaste({ name, color, icon : Icon, ...rest }: Props){
   return (
      <Container {...rest}>
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