import styled from 'styled-components/native';

export const Container = styled.View``;

export const Text = styled.Text`
    font-family: ${({theme})=> theme.fonts.italic};
    color: ${({theme})=>theme.colors.write};
    font-size: 15px;
`;