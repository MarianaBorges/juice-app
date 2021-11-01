import React from 'react';
import { StatusBar } from 'expo-status-bar';

import {
    Container,
    Title,
    Header,
    Flavors,
    Juices
} from './styles';

import { Background } from '../../components/Background'
import { Logo } from '../../components/Logo';
import { User } from '../../components/User';
import { Card } from '../../components/Card';
import { ItemTaste } from '../../components/ItemTaste';
import { useTheme } from 'styled-components/native';

import AppleSVG from '../../assets/apple.svg';
import CherrySVG from '../../assets/cherry.svg';
import CoconutSVG from '../../assets/coconut.svg';
import GrapeSVg from '../../assets/grape.svg';
import PearSVG from '../../assets/Pear.svg';
import PineappleSVG from '../../assets/pineapple.svg';


const flavors = [
    {
        id: 1,
        name: 'Apple'
    },
    {
        id: 2,
        name: 'Cherry'
    },
    {
        id: 3,
        name: 'Coconut'
    },
    {
        id: 4,
        name: 'Grape'
    },
    {
        id: 5,
        name: 'Pear'
    },
    {
        id: 6,
        name: 'Pineapple'
    },
];

const juices = [
    {
        id: 1,
        name: 'Juice1',
        price: '10,00',
        image: 'https://media.cotabest.com.br/media/sku/suco-sabor-maca-verde-lata-269ml-liv-un.png',
    },
    {
        id: 2,
        name: 'Juice2',
        price: '10,00',
        image:'https://app-23495.nuvem-brasil-10.absamcloud.com/pessego%20n.png-1594172732260.png',
    },
    {
        id: 3,
        name: 'Juice3',
        price: '10,00',
        image: 'https://media.cotabest.com.br/media/sku/suco-sabor-grapefruit-lata-269ml-liv-un.png',
    },
]

export function Home(){

    const theme = useTheme();

    function getAccessoryIcon(type: string){
        switch(type){
            case 'Apple': 
                return AppleSVG;
            case 'Cherry': 
                return CherrySVG;
            case 'Coconut': 
                return CoconutSVG;
            case 'Grape': 
                return GrapeSVg;
            case 'Pear': 
                return PearSVG;
            case 'Pineapple': 
                return PineappleSVG;
            default:
                return AppleSVG;
        }
    }

   return (
       <Background>
           <StatusBar
                backgroundColor="transparent"
                translucent
            />
            <Container>

                <Header>
                    <Logo/>
                    <User source='https://i.pinimg.com/236x/65/ec/30/65ec30b84a0bcb0a64254396fd822cd0--eyes-hair.jpg'/>
                </Header>

            <Flavors
                data={flavors}
                keyExtractor={item => String(item.id)}
                renderItem={
                    ({item})=><ItemTaste 
                            name={item.name}
                            icon={getAccessoryIcon(item.name)} 
                            color={theme.colors.candyRed}
                        />}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />

            <Title>Most Popular</Title>
            <Juices
                data={juices}
                keyExtractor={item => String(item.id)}
                renderItem={
                    ({item}) => <Card data={item}/>}
                horizontal={true}
                showsHorizontalScrollIndicator={false} 
            />
            </Container>
        </Background>
 );
}