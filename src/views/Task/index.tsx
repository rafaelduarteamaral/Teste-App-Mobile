import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import { ActivityIndicator, Alert, Switch, TouchableOpacity, View } from 'react-native';
import typeIcons from '../../utils/typeIcons.ts';
import { ScrollView } from 'react-native-gesture-handler';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import DateTimeInput from '../../components/DateTimeInput';


import { Container, ImageIcon, InLine, InputAreaTask, InputInline, InputTask, Label, RemoveLabel, SwitchLabel, IconInative } from './styles';
import { useEffect } from 'react';
import api from '../../services/api';
import GeoClimate from '../../components/GeoClimate';

interface Navigation {
  navigation: any
}

function createTask(data: any) {
  return function (dispatch: any) {
    api.post('task', data).then(
      int => dispatch({ type: 'SUCCESS', payload: data }),
      err => dispatch({ type: 'ERROR', error: err }),
    )
  };
};

function updateTask(data: any, id: any) {
  return function (dispatch: any) {
    api.put(`task/${id}`, data).then(
      int => dispatch({ type: 'SUCCESS', payload: data }),
      err => dispatch({ type: 'ERROR', error: err }),
    )
  };
};

function loadTaskRedux(id: any) {
  return function (dispatch: any) {
    api.get(`task/${id}`).then(
      data => dispatch({ type: 'SUCCESS', payload: data.data }),
      err => dispatch({ type: 'ERROR', error: err }),
    )
  };
};

const Task: React.FC<Navigation> = ({ navigation }) => {
  const dispatch = useDispatch()
  const [id, setId] = useState();
  const [done, setDone] = useState(false);
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [datetime, setDatetime] = useState("");
  const [hour, setHour] = useState("");
  const [clima, setClima] = useState("");
  const [cidade, setCidade] = useState("");

  const [macaddress, setMacaddress] = useState("");
  const [load, setLoad] = useState(false);

  const data = useSelector((store: any) => store.getTaskReducer)

  async function DeleteTask(){
    await api.delete(`/task/${id}`).then(() => {
      navigation.navigate('Home');
    });
  }

  async function Remove(){
    Alert.alert(
      'Remover Tarefa',
      'Deseja realmente remover essa tarefa?',
      [
        {text: 'Cancelar'},
        {text: 'Confirmar', onPress: () => DeleteTask()},
      ],
      { cancelable: true }
    )
  }

  async function SaveTask(){

    if(!title)
    return Alert.alert('Defina o nome da tarefa!');

    if(!description)
    return Alert.alert('Defina a descrição da tarefa!');

    if(!type)
    return Alert.alert('Escolha um tipo para a terafa!');

    if(!datetime)
    return Alert.alert('Escolha uma data para a terafa!');

    if(!hour)
    return Alert.alert('Escolha uma hora para a terafa!');

    if(!cidade)
    return Alert.alert('Escolha uma cidade para a terafa!');

    let data = {
      macaddress : "11:11:11:11:11:11",
      type,
      title,
      cidade,
      description,
      when: `${datetime}T${hour}.000`
    }

    if(id) {
      dispatch(updateTask(data, id))
    } else {
      dispatch(createTask(data))
    }
    
  }


  function Home(){
    navigation.navigate('Home');
  }

  async function LoadTask(ids){
    await api.get(`task/${ids}`).then(response => {
      setLoad(true);
      setDone(response.data.done);
      setType(response.data.type);
      setTitle(response.data.title);
      setCidade(response.data.cidade);
      setDescription(response.data.description);
      setDatetime(response.data.when);
      setHour(response.data.when);
    });

    setLoad(false);
  }


  useEffect(() => {
    if(navigation.state.params){
      setId(navigation.state.params.idtask)
      LoadTask(navigation.state.params.idtask)
    }
  }, []);

  return (
    <Container>
      <Header  onPress={Home}/>
      {
        load
          ?
          <ActivityIndicator color='#EE6B26' size={50} style={{ marginTop: 150 }} />
          :
          <ScrollView style={{ width: '100%' }}>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginVertical: 10 }}>
              {
                typeIcons.map((icon, index) => (
                  icon != null &&
                  <TouchableOpacity key={index} onPress={() => setType(index)}>
                    {
                      type != index ? <ImageIcon source={icon} /> : <IconInative source={icon} />
                    }
                  </TouchableOpacity>
                ))
              }
            </ScrollView>

            <Label>Título</Label>
            <InputTask
              maxLength={30}
              placeholder="Lembre-me de fazer..."
              onChangeText={(text) => setTitle(text)}
              value={title}
            />

            <DateTimeInput  type={'date'} save={setDatetime} datetime={datetime}/>
            <DateTimeInput  type={'hour'} save={setHour} hour={hour} />
            
            <Label>Cidade</Label>
            <GeoClimate save={setCidade}  cidade={cidade}/>

            <Label>Detalhes</Label>
            
            <InputAreaTask
              maxLength={200}
              multiline={true}
              placeholder="Detalhes da atividade que eu tenho que lembrar..."
              onChangeText={(text) => setDescription(text)}
              value={description}
            />

            {
              id &&
              <InLine>
                <TouchableOpacity onPress={Remove}>
                  <RemoveLabel>EXCLUÍR</RemoveLabel>
                </TouchableOpacity>
              </InLine>
            }

          </ScrollView>
      }

      <Footer icon={'save'} onPress={SaveTask} />
    </Container>
  );
};

export default Task;
