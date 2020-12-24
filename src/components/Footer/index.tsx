import React from 'react';

import add from '../../assets/add.png';
import save from '../../assets/save.png';

import { ButtonFooter, Container, ImageFooter, TextFooter } from './styles';

interface FooterInterface {
  icon: string
  onPress: any
}

const Footer: React.FC<FooterInterface> = ({ icon, onPress }) => {
  return (
    <Container>
      <ButtonFooter onPress={onPress}>
        <ImageFooter source={add} />
      </ButtonFooter>
      <TextFooter>
        Organizando sua vida
      </TextFooter>
    </Container>
  );
};

export default Footer;
