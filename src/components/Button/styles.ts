import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
   width: 100%;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   padding: 10px;
   border-radius: 20px;
   background-color: ${({theme}) => theme.colors.pinkCardOne};

`;

export const Price = styled.Text`
    font-size:20px;
    font-family: ${({theme})=> theme.fonts.semiBold};
    color: ${({theme})=> theme.colors.write};
`;