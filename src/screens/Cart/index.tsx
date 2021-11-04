import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { useTheme } from 'styled-components/native';

import {
    Container,
    Header,
    HeaderTitle,
    Content,
    Icon,
    ButtonIcon,
    CartList,
} from './styles';

import { Button } from '../../components/Button';
import { CardShop } from '../../components/CardShop';
import { useNavigation } from '@react-navigation/native';

const data = [
    {
        id: '1',
        image: 'https://media.cotabest.com.br/media/sku/suco-sabor-maca-verde-lata-269ml-liv-un.png',
        name: 'Lemon',
        details: 'made with fruits and a lot of love',
        price: 9.10,
    },
    {
        id: '2',
        image: 'https://media.cotabest.com.br/media/sku/suco-sabor-maca-verde-lata-269ml-liv-un.png',
        name: 'Lemon',
        details: 'made with fruits and a lot of love',
        price: 9.10,
    },
    {
        id: '3',
        image: 'https://media.cotabest.com.br/media/sku/suco-sabor-maca-verde-lata-269ml-liv-un.png',
        name: 'Lemon',
        details: 'made with fruits and a lot of love',
        price: 9.10,
    },
    {
        id: '4',
        image: 'https://media.cotabest.com.br/media/sku/suco-sabor-maca-verde-lata-269ml-liv-un.png',
        name: 'Lemon',
        details: 'made with fruits and a lot of love',
        price: 9.10,
    },

];

export function Cart(){ 

    const theme = useTheme(); 
    const {goBack} = useNavigation();

   return (
        <Container>
            <StatusBar
                backgroundColor="transparent"
                translucent
            />
            <Header>
                <ButtonIcon onPress={()=>{
                    goBack()}
                }>
                    <Icon 
                        name="arrowleft" 
                        size={24} 
                        color={theme.colors.write} 
                    />
                </ButtonIcon>
                <HeaderTitle>
                    MY CART
                </HeaderTitle>
            </Header>
            <Content>
                <CartList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={
                        ({item})=><CardShop data={item}/>}
                    showsVerticalScrollIndicator={false}
                />
            
                <Button total='25.50'/>
            </Content>
        </Container>
 );
}