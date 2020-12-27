import React, { useState, useEffect } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button, View, Platform } from 'react-native';
import { format, isPast } from 'date-fns';
import { Container, InputTask, TouchableOpacityDateTime, IconTextInput } from './styles';
import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';

interface DateTimeTypes {
  type: string
  save?: any
  datetime?: any
  hour?: any
}

const DateTimeInput: React.FC<DateTimeTypes> = ({ type, save, datetime, hour }) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [valueComponent, setValueComponent] = useState("")

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  useEffect(() => {
    if(type == 'date' && date){
      setValueComponent(format(new Date(date), 'dd/MM/yyyy'));
      save(format(new Date(date), 'yyyy-MM-dd'));
    }

    if(type == 'hour' && date){
      setValueComponent(format(new Date(date), 'HH:mm'));
      save(format(new Date(date), 'HH:mm:ss'));
    }
  },[date])
  return (
    <Container>
      <View>
        <TouchableOpacityDateTime onPress={type == 'date' ? showDatepicker : showTimepicker}>
          <InputTask
            placeholder={type == 'date' ? 'Clique aqui para definir a data...' : 'Clique aqui para definir a hora...'}
            editable={false}
            value={valueComponent}
          />
          <IconTextInput source={type == 'date' ? iconCalendar : iconClock} />
        </TouchableOpacityDateTime>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </Container>
  );
};

export default DateTimeInput;
