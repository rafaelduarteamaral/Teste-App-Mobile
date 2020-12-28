import React, { useState } from 'react';
import { format } from 'date-fns';
import typeIcons from '../../utils/typeIcons';
import { CardDate, CardLeft, CardRight, CardTime, CardTitle, Container, TypeActive } from './styles';
import axios from 'axios';
import { useEffect } from 'react';

interface CardTask {
  done: any
  title: any
  when: any
  type: any
  cidade: any
  onPress: any
}

const TaskCard: React.FC<CardTask> = ({ done, title, when, cidade, type, onPress }) => {

  const [tempo, setTempo]: any = useState();

  async function getTempo() {
    console.log(cidade)
    await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=deb65f7a40c8141a9e32ecb4a42092db&lang=pt_br`)
    .then((response: any) => {
      if(response.data) {
        setTempo(response.data.weather[0].description)
      } else {
        setTempo("N/A")
      }
    });
  }

  useEffect(() => {
    getTempo()
  }, [])


  return (
    <Container  onPress={onPress}>
      <CardLeft>
        <TypeActive  source={typeIcons[type]}/>
        <CardTitle>{title}</CardTitle>
      </CardLeft>
      <CardRight>
        <CardDate>{format(new Date(when), 'dd/MM/yyyy')}</CardDate>
        <CardTime>{tempo}</CardTime>
        <CardTime>{format(new Date(when), 'HH:mm')}</CardTime>
      </CardRight>
    </Container>
  );
};

export default TaskCard;
