import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   justify-content: center;
   align-items: center;
`;

export const Title = styled.Text`
    font-size: 26px;
    font-family: ${({theme})=>theme.fonts.semiBold};
    color: ${({theme})=>theme.colors.write};
`;