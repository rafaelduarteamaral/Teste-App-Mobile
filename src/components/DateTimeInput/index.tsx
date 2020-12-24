import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button, View, Platform } from 'react-native';
import { Container, InputTask, TouchableOpacityDateTime, IconTextInput } from './styles';
import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';

interface DateTimeTypes {
  type: string
  save?: any
  date?: any
  hour?: any
}

const DateTimeInput: React.FC<DateTimeTypes> = ({ type, save, hour, date }) => {
  const [dateDateTime, setDateDateTime] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [datetime, setDateTime] = useState();
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDateDateTime(currentDate);
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

  return (
    <Container>
      <View>
        <TouchableOpacityDateTime onPress={type == 'date' ? showDatepicker : showTimepicker}>
          <InputTask
            placeholder={type == 'date' ? 'Clique aqui para definir a data...' : 'Clique aqui para definir a hora...'}
            editable={false}
            value={datetime}
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
