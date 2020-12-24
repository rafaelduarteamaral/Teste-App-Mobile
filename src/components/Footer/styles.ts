import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 50px;
    background-color: #202020;
    position: absolute;
    bottom: 0px;
    border-top-width: 5px;
    border-top-color: #EE6B26;
    align-items: center;
`;

export const ButtonFooter = styled.TouchableOpacity`
    position: relative;
    top: -40px;
`;

export const ImageFooter = styled.Image`
    width: 80px;
    height: 80px;
`;

export const TextFooter = styled.Text`
    position: relative;
    top: -35px;
    color: #FFF
`;