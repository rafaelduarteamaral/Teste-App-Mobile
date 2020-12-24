import React from 'react';
import { useState } from 'react';
import { ActivityIndicator, Switch, TouchableOpacity, View } from 'react-native';
import typeIcons from '../../utils/typeIcons.ts';
import { ScrollView } from 'react-native-gesture-handler';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import DateTimeInput from '../../components/DateTimeInput';

import { Container, ImageIcon, InLine, InputAreaTask, InputInline, InputTask, Label, RemoveLabel, SwitchLabel } from './styles';

const Task: React.FC = () => {

  const [id, setId] = useState();
  const [done, setDone] = useState(false);
  const [type, setType] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [hour, setHour] = useState();
  const [macaddress, setMacaddress] = useState();
  const [load, setLoad] = useState(false);

  async function Remove() {}

  async function SaveTask(){}

  return (
    <Container>
      <Header />

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
                    <ImageIcon source={icon} />
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

            <DateTimeInput  type={'date'} save={setDate} date={date}/>
            <DateTimeInput  type={'hour'} save={setHour} hour={hour} />
            
            <Label>Detalhes</Label>
            
            <InputAreaTask
              maxLength={200}
              multiline={true}
              placeholder="Detalhes da atividade que eu tenho que lembrar..."
              onChangeText={(text) => setDescription(text)}
              value={description}
            />

            {/* <DateTimeInput type={'date'} save={setDate} date={date} />
        <DateTimeInput type={'hour'} save={setHour} hour={hour} /> */}

            {
              id &&
              <InLine>
                <InputInline >
                  <Switch onValueChange={() => setDone(!done)} value={done} thumbColor={done ? '#00761B' : '#EE6B26'} />
                  <SwitchLabel>Concluído</SwitchLabel>
                </InputInline>
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
