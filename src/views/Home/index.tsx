import React from 'react';

import { Text } from 'react-native';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import { Container } from './styles';

interface Navigation {
  navigation: any
}

const Home: React.FC<Navigation> = ({ navigation }) => {

  function New(){
    navigation.navigate('Task');
  }

  return (
    <Container>
      <Header />
      <Text>Home</Text>
      <Footer icon={'add'} onPress={New} />
    </Container>
  );
};

export default Home;
