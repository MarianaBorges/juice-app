import styled from 'styled-components/native';
import { FlatList } from 'react-native';

interface FlavorsProps{
    id: string;
    name: string;
}

interface JuiceProps{
    id: string;
    name: string;
    price: Number;
    image: string;
    details: string;
}

export const Container = styled.View`
   padding-top: 50px;
   padding-left: 20px;
   padding-bottom: 10px;
   justify-content: center;
   align-items: flex-start;
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.semiBold};
    color: ${({theme}) => theme.colors.write};
`;

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-right: 20px;
`; 

export const Flavors = styled(FlatList as new ()=>FlatList<FlavorsProps>)`
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const Juices = styled(FlatList as new ()=> FlatList<JuiceProps>)`
    padding-top: 20px;
`;