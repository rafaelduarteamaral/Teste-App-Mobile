import React from 'react';
import { ActivityIndicator, ScrollView, Text, TouchableOpacity } from 'react-native';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Calendar from '../../components/Calendar';
import { Container, Content, Filter, FilterTextActived, FilterTextInative, Title, TitleText } from './styles';
import { useState } from 'react';
import TaskCard from '../../components/TaskCard';
import api from '../../services/api';
import { useEffect } from 'react';
import { format } from 'date-fns';

interface Navigation {
  navigation: any
}

const Home: React.FC<Navigation> = ({ navigation }) => {


  const [tasks, setTasks] = useState([]);
  const [load, setLoad] = useState(false);
  const [filter, setFilter] = useState('today');
  const [lateCount, setLateCount] = useState();
  const [dateSelect, setDateSelect] = useState({});
  const [periods, setPeriods] = useState({});

  function New() {
    navigation.navigate('Task');
  }

  function Home() {
    navigation.navigate('Home');
  }


  function Show(id) {
    navigation.navigate('Task', { idtask: id });
  }

  async function loadTasks() {

    setLoad(true);
    await api.get(`/task/filter/${filter}/11:11:11:11:11:11`)
      .then(response => {
        setTasks(response.data)
        response.data.map((r: any) => {
          setDateSelect(format(new Date(r.when), 'yyyy-MM-dd'))
          let txt = `${dateSelect}: {dots: [{key:${r.type}, color: 'red', selectedDotColor: 'blue'}], selected: true, selectedColor: 'red'}`
          txt = JSON.stringify(txt)
          setPeriods({ txt })
        })
        setLoad(false)
      });
  }

  async function lateVerify() {
    await api.get(`/task/filter/late/11:11:11:11:11:11`)
      .then(response => {
        setLateCount(response.data.length)
      });
  }

  function Notification() {
    setFilter('late');
  }

  useEffect(() => {
    loadTasks();
    lateVerify();
  }, [filter])

  return (
    <Container>
      <Header onPress={Home} pressNotification={Notification} />
      <Calendar />
      <Filter>
        <TouchableOpacity onPress={() => setFilter('all')}>
          {true ? <FilterTextActived>Todos</FilterTextActived> : <FilterTextInative>Todos</FilterTextInative>}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilter('today')}>
          {true ? <FilterTextActived>Hoje</FilterTextActived> : <FilterTextInative>Hoje</FilterTextInative>}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilter('month')}>
          {true ? <FilterTextActived>Semana</FilterTextActived> : <FilterTextInative>Semana</FilterTextInative>}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilter('week')}>
          {true ? <FilterTextActived>Mês</FilterTextActived> : <FilterTextInative>Mês</FilterTextInative>}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilter('year')}>
          {true ? <FilterTextActived>Ano</FilterTextActived> : <FilterTextInative>Ano</FilterTextInative>}
        </TouchableOpacity>
      </Filter>

      <TitleText>TAREFAS {filter == 'late' && ' ATRASADAS'}</TitleText>

      <Content contentContainerStyle={{ alignItems: 'center', width: "100%" }}>
        {
          load
            ?
            <ActivityIndicator color='#EE6B26' size={50} />
            :
            tasks.map((t: any) =>
            (
              <TaskCard key={t._id}
                done={t.done}
                title={t.title}
                when={t.when}
                type={t.type}
                onPress={() => Show(t._id)}
              />
            ))
        }
      </Content>

      <Footer icon={'add'} onPress={New} />
    </Container>
  );
};

export default Home;
