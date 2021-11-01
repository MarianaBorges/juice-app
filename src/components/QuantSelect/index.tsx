import React, {useState} from 'react';

import {
    Container,
    PriceView,
    PriceText,
    CounterView,
    PlusButton,
    Icon,
    QuantView,
    QuantText,
    MinusButton
} from './styles';

import { useTheme } from 'styled-components/native';

interface Props{
    price: number;
}

export function QuantSelect({price}:Props){

    const theme = useTheme();
    const [counter, setCounter] = useState(1);
    const [priceTotal, setPriceTotal] = useState(price);

    function plusButton(){
        setPriceTotal(priceTotal+price);
        setCounter(counter + 1);
    }

    function minusButton(){
        if(counter > 0){
            setPriceTotal(priceTotal-price);
            setCounter(counter - 1);
        }else{
            setPriceTotal(0);
            setCounter(0);
        }
    }

   return (
      <Container>
          <PriceView>
              <PriceText>${priceTotal.toFixed(2)}</PriceText>
          </PriceView>
          <CounterView>
            <MinusButton
                onPress={minusButton}
              >
              <Icon 
                name="minuscircleo" 
                size={24} 
                color={theme.colors.write} 
                />
              </MinusButton>
          
              <QuantView>
                  <QuantText>
                    {counter}
                  </QuantText>
              </QuantView>
              <PlusButton 
                onPress={plusButton}
              >
                <Icon 
                    name="pluscircleo" 
                    size={24} 
                    color={theme.colors.write} 
                    />
              </PlusButton>
          </CounterView>
      </Container>
 );
}