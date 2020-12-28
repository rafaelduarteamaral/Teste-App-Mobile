import { Alert } from "react-native"

const INITIAL_STATE = {
    'count': 1
}


export default function reducer(state=INITIAL_STATE, action: any) {
  switch (action.type) {
    case 'SUCCESS':
        Alert.alert("Sucesso!")
        return {...state, ...action.payload}
    case 'ERROR':
        Alert.alert("Error!")
       return {...state}
    default:
      return state;
  }
}
