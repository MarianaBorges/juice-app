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
import { useCart } from '../../context/cart';

interface Props{
    data:{
        id: string;
        image: string;
        name: string;
        details: string;
        price: number;
        priceTotal?:number;
        quant?:number;
    }
}

export function CardShop({data}:Props){

    const {modifiesJuices} = useCart();

    function changeValue(price: number, quant: number){
       
        const newData = {
            id: data.id,
            image: data.image,
            name: data.name,
            details: data.details,
            price: data.price,
            priceTotal: price,
            quant: quant
        }
        modifiesJuices(newData);
    }

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
            <QuantSelect 
                price={Number(data.price)}
                onChange={changeValue}
            />
          </JuiceDetails>
      </Container>
    );
}