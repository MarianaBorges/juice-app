import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

export const JuiceView = styled.View`
    background-color: ${({theme})=> theme.colors.pinkCardOne};
    padding: 10px;
    border-radius: 15px;
`;

export const JuiceImage = styled.Image`
    width: 120px;
    height: 140px;
`;

export const JuiceDetails = styled.View`
    width: 55%;
`;

export const JuiceName = styled.Text`
    font-size: 16px;
    font-family: ${({theme}) => theme.fonts.semiBold};
    color: ${({theme})=> theme.colors.write};
`;

export const JuiceDescription = styled.Text`
    font-size: 12px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme})=> theme.colors.fontColorTwo};
`;