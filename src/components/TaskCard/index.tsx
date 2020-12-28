import React from 'react';
import { format } from 'date-fns';
import typeIcons from '../../utils/typeIcons';
import { CardDate, CardLeft, CardRight, CardTime, CardTitle, Container, TypeActive } from './styles';

interface CardTask {
  done: any
  title: any
  when: any
  type: any
  cidade: any
  onPress: any
}

const TaskCard: React.FC<CardTask> = ({ done, title, when, type, cidade,onPress }) => {
  return (
    <Container  onPress={onPress}>
      <CardLeft>
        <TypeActive  source={typeIcons[type]}/>
        <CardTitle>{title}</CardTitle>
      </CardLeft>
      <CardRight>
        <CardDate>{format(new Date(when), 'dd/MM/yyyy')} {cidade}</CardDate>
        <CardTime>{format(new Date(when), 'HH:mm')}</CardTime>
      </CardRight>
    </Container>
  );
};

export default TaskCard;
