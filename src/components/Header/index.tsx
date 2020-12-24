import React from 'react';

import logo from './../../assets/logo.png';
import bell from './../../assets/bell.png';
import qrcode from './../../assets/qrcode.png';
import back from './../../assets/back.png';

import { Container, Logo, Notification, NotificationImage, Circle, NotificationText } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo source={logo} />
      <Notification >
          <NotificationImage source={bell} />
          <Circle>
            <NotificationText>2</NotificationText>
          </Circle>
      </Notification>
    </Container>
  );
};

export default Header;
