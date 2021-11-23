import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import api from '../../services/api';
import { Alert, ActivityIndicator } from 'react-native';

import {
    Container,
    Title,
    Header,
    Flavors,
    Juices,
    IndicatorContainer,
    ButtonTryAgain,
    TextButtonTryAgain
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

export function Home(){

    const [isLoading, setIsLoading] = useState(false);
    const [juices, setJuices] = useState([]);
    const [flavors, setFlavors] = useState([]);
    const theme = useTheme();

    async function fechMostPopularJuices(){
        try{
            setIsLoading(true);
            const response = await api.get('/juices?_page=1&_limit=3');
            setJuices(response.data);
        }catch(e){
            console.error(e);
            Alert.alert("Ooops!","Ocorreu um problema!")
        }finally{
            setIsLoading(false);
        }
    }

    async function fechJuices(id:string){
        try{
            const response = await api.get(`/juices?_page=${id}&_limit=1`);
            setJuices(response.data);
        }catch(e){
            console.error(e);
            Alert.alert("Ooops!","Ocorreu um problema!")
        }
    }

    async function fechFlavors(){
        try{
            setIsLoading(true);
            const response = await api.get('/flavors');
            setFlavors(response.data);
        }catch(e){
            console.error(e);
            Alert.alert("Ooops!","Ocorreu um problema!")
        }finally{
            setIsLoading(false);
        }
    }

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

    function handleTryAgain (){
        fechFlavors();
        fechMostPopularJuices();
    }

    useEffect(()=>{
        handleTryAgain();
    },[]);

   return (
       <Background>
           <StatusBar
                backgroundColor="transparent"
                translucent
            />
            {
                isLoading 
                ?
                    <IndicatorContainer>
                        <ActivityIndicator 
                            size="small" 
                            color={theme.colors.write}
                        />
                    </IndicatorContainer>
                :
                    flavors.length > 0 && juices.length > 0 ?
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
                                            onPress={()=>fechJuices(item.id)}
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
                    :
                    <IndicatorContainer>
                        <ButtonTryAgain onPress={()=>handleTryAgain()}>
                            <TextButtonTryAgain>
                                Tentar novamente
                            </TextButtonTryAgain>
                        </ButtonTryAgain>
                    </IndicatorContainer>
            }
            
        </Background>
    );
}