import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    width: 90%;
    height: 80px;
    border-radius: 10px;
`;


export const CardLeft = styled.View`
    flex-direction: row;
    align-items: center;
`;


export const TypeActive = styled.Image`
    width: 50px;
    height: 50px;
`;

export const CardTitle = styled.Text`
    margin-left: 10px;
    font-weight: bold; 
    font-size: 16px;
`;

export const CardRight = styled.View`
    align-items: flex-end;
    justify-content: space-between;
`;

export const CardDate = styled.Text`
    color: #EE6B26;
    font-weight: bold;
    font-size: 16px;
`;

export const CardTime = styled.Text`
    color: #707070
`;



