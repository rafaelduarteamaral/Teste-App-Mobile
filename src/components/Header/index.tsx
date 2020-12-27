import React, { useEffect } from 'react';

import logo from './../../assets/logo.png';
import bell from './../../assets/bell.png';
import qrcode from './../../assets/qrcode.png';
import back from './../../assets/back.png';

import { Container, Logo, Notification, NotificationImage, Circle, NotificationText } from './styles';
import { TouchableOpacity } from 'react-native';
import api from '../../services/api';
import { useState } from 'react';

interface Navigation {
  onPress: any
  filter?: any
}

const Header: React.FC<Navigation> = ({onPress, filter}) => {
  
  const [load, setLoad] = useState(false);
  const [lateCount, setLateCount] = useState(0);
    
  async function loadTasks(){
    setLoad(true);
    await api.get(`/task/filter/${filter}/11:11:11:11:11:11`)
    .then(response => {
      setLoad(false)
      setLateCount(response.data.length)
    });
  }

  async function lateVerify(){
    await api.get(`/task/filter/all/11:11:11:11:11:11`)
    .then(response => {
      setLateCount(response.data.length)      
    });
  }


  // function Notification(){
  //   setFilter('late');
  // }

  useEffect(() => {
    lateVerify();

    if(filter) {
      loadTasks()
    }
  }, [filter])

  return (
    <Container>
      <TouchableOpacity onPress={onPress}>
        <Logo source={logo}/>
      </TouchableOpacity>
      <Notification >
          <NotificationImage source={bell} />
          <Circle>
            <NotificationText>{lateCount > 0 && lateCount}</NotificationText>
          </Circle>
      </Notification>
    </Container>
  );
};

export default Header;
