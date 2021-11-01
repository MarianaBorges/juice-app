import React from 'react';

import {
    Container,
    JuiceView,
    JuiceImage,
    JuiceDetails,
    JuiceName,
    JuiceDescription
} from './styles';

import { QuantSelect } from '../QuantSelect';

interface Props{
    data:{
        image: string;
        name: string;
        details: string;
        price: number;
    }
}

export function CardShop({data}:Props){
   return (
      <Container>
          <JuiceView>
              <JuiceImage 
                source={{
                    uri: data.image
                }}
              />
          </JuiceView>
          <JuiceDetails>
                <JuiceName>{data.name}</JuiceName>
                <JuiceDescription>{data.details}</JuiceDescription>
            <QuantSelect price={data.price}/>
          </JuiceDetails>
      </Container>
 );
}