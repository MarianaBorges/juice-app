import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { FlatList } from 'react-native';

interface JuiceProps{
    id: string;
    name: string;
    price: number;
    image: string;
    details: string;
}

export const Container = styled.View`
    flex: 1;
    justify-content:flex-end;
    align-items: center;
    background-color: ${({theme}) => theme.colors.backgroundGray};
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 100%;
`;

export const HeaderTitle = styled.Text`
    font-size: 16px;
    font-family: ${({theme})=> theme.fonts.semiBold};
    color: ${({theme})=> theme.colors.write};
`;

export const ButtonIcon = styled(RectButton)`
    position: absolute;
    top: 22px;
    left: 15px;
`;

export const Icon = styled(AntDesign)``;

export const Content = styled.View`
    background-color: ${({theme}) => theme.colors.background};
    width: 100%;
    height: 87%;
    justify-content: flex-end;
    align-items: center;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 20px 15px;
`;

export const CartList = styled(FlatList as new ()=> FlatList<JuiceProps>)`
    margin-bottom: 10px;
`;

export const Worning = styled.Text`
    font-size: 16px;
    font-family: ${({theme})=> theme.fonts.semiBold};
    color: ${({theme})=> theme.colors.write};
`;