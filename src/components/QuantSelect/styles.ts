import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons'; 

export const Container = styled.View``;

export const PriceView = styled.View``; 

export const PriceText = styled.Text`
    font-size: 18px;
    font-family: ${({theme})=>theme.fonts.semiBold};
    color: ${({theme})=>theme.colors.write};
`; 

export const CounterView = styled.View`
    flex-direction: row;
`;
export const PlusButton = styled(RectButton)``;

export const Icon = styled(AntDesign)``;

export const QuantView = styled.View`
    padding: 4px 7px;
`;

export const QuantText = styled.Text`  
    font-size: 12px;
    font-family: ${({theme})=>theme.fonts.semiBold};
    color: ${({theme})=>theme.colors.write};
`;

export const MinusButton = styled(RectButton)``;