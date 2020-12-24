import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    background-color: #FFF;
    align-items: center;
    justify-content: flex-start;
`;

export const Label = styled.Text`
    color: #707070;
    font-size: 16px;
    margin-top: 20px;
    margin-bottom: 5px;
`;

export const SwitchLabel = styled.Text`
    font-weight: bold;
    color: #EE6B26;
    text-transform: uppercase;
    font-size: 16px;
    padding-left: 10px;
`;

export const RemoveLabel = styled.Text`
    font-weight: bold;
    color: #20295F;
    text-transform: uppercase;
    font-size: 16px;
`;

export const ImageIcon = styled.Image``;

export const InLine = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin-bottom: 50px;
`;
 
export const InputInline = styled.View`
   flex-direction: 'row';
   align-items: 'center'; 

`;

export const InputTask = styled.TextInput`
    font-size: 16px;
    padding: 10px;
    width: 95%;
    border-bottom-width: 1px;
    border-bottom-color: #EE6B26;
`;

export const InputAreaTask = styled.TextInput`
    font-size: 16px;
    padding: 10px;
    width: 95%;
    border-width: 1px;
    border-color: #EE6B26;
    border-radius: 10px;
    height: 100px;
`;

