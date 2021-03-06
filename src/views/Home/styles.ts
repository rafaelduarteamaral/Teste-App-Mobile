import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #FFF;
    justify-content: flex-start; 
`;

export const Filter = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    height: 70px;
    align-items: center;
    margin-top: 35%;
`;

export const SetFilter = styled.TouchableOpacity``;

export const FilterTextActived = styled.Text`
    font-weight: bold;
    font-size: 18px;
    color: #EE6B26;
`;

export const FilterTextInative = styled.Text`
    color: #20295f;
    font-weight: bold;
    font-size: 18px;
    opacity: 0.5;
`;

export const Title = styled.Text`
    width: 100%;
    border-bottom-width: 1px;
    border-color: #20295f;
    align-items: center;
    justify-content: center;
`;

export const TitleText = styled.Text`
    color: #20295f;
    font-size: 18px;
    text-align: center;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 11px;
    background-color: #FFF;
`;

export const Content = styled.ScrollView`
    width: 100%;
    margin-top: 30px;
`;
