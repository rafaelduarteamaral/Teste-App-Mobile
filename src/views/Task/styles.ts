import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    background-color: #FFF;
    align-items: center;
    justify-content: center;
`;

export const Label = styled.Text`
    color: #707070;
    font-size: 16px;
    margin-top: 20px;
    margin-bottom: 5px;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
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

export const ImageIcon = styled.Image`
`;

export const IconInative = styled.Image`
    opacity: 0.5;
`;

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
    margin-left: 8px;
    border-bottom-width: 1px;
    border-bottom-color: #EE6B26;
`;

export const InputAreaTask = styled.TextInput`
    font-size: 16px;
    padding: 10px;
    width: 95%;
    margin-left: 8px;
    border-width: 1px;
    border-color: #EE6B26;
    border-radius: 10px;
    height: 100px;
`;

