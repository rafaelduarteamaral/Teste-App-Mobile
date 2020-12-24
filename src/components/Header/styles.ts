import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 90px;
    background-color: #202020;
    border-bottom-width: 5px;
    border-bottom-color: #EE6B26;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
    width: 100px;
    height: 30px;
`;

export const Notification = styled.TouchableOpacity `
    position: absolute;
    right: 20px;
`;

export const NotificationImage = styled.Image`
    width: 30px;
    height: 35px;
`;

export const NotificationText = styled.Text`
    font-weight: bold;
    color: #EE6B26;
`;

export const LeftIconImage = styled.Image`
    width: 25px;
    height: 25px;
    background-color: #FFF;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 13px;
    bottom: 13px;
`;

export const Circle = styled.View``;

export const LeftIcon = styled.TouchableOpacity`
    position: absolute;
    left: 20px;
`;



