import styled from 'styled-components/native';

interface Props{
   color: string;
}

export const Container = styled.View`
   margin-right: 15px;
`;

export const Content = styled.View<Props>`
   width: 60px;
   height: 60px;
   justify-content: center;
   align-items: center;
   border-width: 0.5px;
   border-color: ${({color})=>color};
   border-radius: 30px;
`;

export const ContentText = styled.View`
   width: 100%;
   justify-content: center;
   align-items: center;
`;

export const FruitView = styled.View<Props>`
   width: 55px;
   height: 55px;
   justify-content: center;
   align-items: center;
   border-width: 1px;
   background-color: ${({color})=>color};
   border-radius: 30px;

`;

export const Text = styled.Text`
    font-size: 12px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme})=> theme.colors.write};
`;