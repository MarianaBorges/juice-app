import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const heigthScreen = Dimensions.get('window').height;
const cardHeight = (heigthScreen*50)/100;

const widthScreen = Dimensions.get('window').width;
const cardWidth = (widthScreen*60)/100;

export const Container = styled.View`
    width: ${cardWidth}px;
    height: ${cardHeight}px;
    background-color: ${({theme})=> theme.colors.pinkCardOne};
    border-radius: 20px;
    justify-content: flex-end;
    align-items: center;
    padding: 10px;
    margin-right: 10px;
`;

export const CanImage = styled.Image`
    width: 80%;
    height: 70%;
    margin-bottom: ${heigthScreen*3/100}px;
`;

export const Footer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Content = styled.View`
`;

export const Text = styled.Text`
    font-size: 14px;
    font-family: ${({theme}) => theme.fonts.semiBold};
    color: ${({theme})=> theme.colors.write};
    line-height: 25px;
`;

export const TextPrice = styled.Text`
    font-size: 25px;
    font-family: ${({theme}) => theme.fonts.semiBold};
    color: ${({theme})=> theme.colors.write};
`;

export const Icon = styled(Ionicons)``;