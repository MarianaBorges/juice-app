import React,{useEffect} from 'react';

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
    Worning
} from './styles';

import { Button } from '../../components/Button';
import { CardShop } from '../../components/CardShop';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../../context/cart';

export function Cart(){ 

    const theme = useTheme(); 
    const { goBack } = useNavigation();
    const { juices, total } = useCart();

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
                {
                    juices.length > 0 
                    ?
                        <CartList
                        data={juices}
                        keyExtractor={item => item.id}
                        renderItem={
                            ({item})=><CardShop data={item}/>}
                        showsVerticalScrollIndicator={false}
                    />
                    :
                        <Worning>Seu carrinho está vazio!</Worning>
                }
            
                <Button total={Number(total)}/>
            </Content>
        </Container>
 );
}