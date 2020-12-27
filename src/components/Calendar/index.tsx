import React, { useState } from 'react';
import { useEffect } from 'react';

import { Text, View } from 'react-native';

import { Container, Title, ButtonNP, TextCalendar, TextTitle } from './styles';

const Calendar: React.FC = () => {
  const [activeDate, setActiveDate] = useState(new Date());
  const [rowss, setRowss] = useState([]);

  const months = ["Janeiro", "Fevereiro", "Março", "Abril",
    "Maio", "Junho", "Julio", "Agosto", "Setembro", "Outubro",
    "Novembro", "Desembro"];

  const weekDays = [
    "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"
  ];

  const nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


  function generateMatrix() {
    var matrix: any = [];
    matrix[0] = weekDays;

    var year = activeDate.getFullYear();
    var month = activeDate.getMonth();
    var firstDay = new Date(year, month, 1).getDay();

    var maxDays = nDays[month];
    if (month == 1) { // February
      if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        maxDays += 1;
      }
    }

    var counter = 1;
    for (var row = 1; row < 7; row++) {
      matrix[row] = [];
      for (var col = 0; col < 7; col++) {
        matrix[row][col] = -1;
        if (row == 1 && col >= firstDay) {
          var rows = [];
          rows = matrix.map((row, rowIndex) => {
            var rowItems = row.map((item, colIndex) => {
              return (
                <Text
                  style={{
                    flex: 1,
                    height: 18,
                    textAlign: 'center',
                    backgroundColor: rowIndex == 0 ? '#ddd' : '#fff',
                    color: colIndex == 0 ? '#a00' : '#000',
                    fontWeight: item == activeDate.getDate()
                      ? 'bold' : ''
                  }}
                  onPress={() => getDay(item)}>
                  {item != -1 ? item : ''}
                </Text>
              );
            });
            return (
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  padding: 15,
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                {rowItems}
              </View>
            );
          });
          matrix[row][col] = counter++;
        } else if (row > 1 && counter <= maxDays) {
          var rows = [];
          rows = matrix.map((row, rowIndex) => {
            var rowItems = row.map((item, colIndex) => {
              return (
                <Text key ={colIndex}
                  style={{
                    flex: 1,
                    height: 18,
                    textAlign: 'center',
                    backgroundColor: rowIndex == 0 ? '#ddd' : '#fff',
                    color: colIndex == 0 ? '#a00' : '#000',
                    fontWeight: item == activeDate.getDate()
                      ? 'bold' : ''
                  }}
                  onPress={() => getDay(item)}>
                  {item != -1 ? item : ''}
                </Text>
              );
            });
            return (
              <View key ={rowIndex}
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  padding: 15,
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                {rowItems}
              </View>
            );
          });
          matrix[row][col] = counter++;
        }
      }
    }

    setRowss(rows)
    return matrix;
  }

  function getDay(item: any) {
    console.log(item)
  }

  function changeMonth(n: any){
    let date = activeDate.setMonth(
      activeDate.getMonth() + n
    )
    setActiveDate(new Date(date));

  }

  useEffect(() => {
    generateMatrix()
    

  }, [activeDate])

  return (
    <Container>
      <Title>
        <ButtonNP onPress={() => changeMonth(-1)}><TextCalendar>{"<"}</TextCalendar></ButtonNP>
        <TextTitle>
          {months[activeDate.getMonth()]} &nbsp;
          {activeDate.getFullYear()}
        </TextTitle>
        <ButtonNP onPress={() => changeMonth(+1)}><TextCalendar>{">"}</TextCalendar></ButtonNP>
      </Title>
      {rowss}
    </Container>
  );
};

export default Calendar;
