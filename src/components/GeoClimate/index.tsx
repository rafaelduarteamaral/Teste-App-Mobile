import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { View } from "react-native";

import { Text } from 'react-native';
import api from '../../services/api';

import { Container, PickerGeo } from './styles';

interface Clima {
  save: any
  cidade: any
}

const GeoClimate: React.FC<Clima> = ({ save, cidade }) => {

  const [location, setLocation] = useState(false);
  const [uf, setUf] = useState("")
  const [selectedValue, setSelectedValue] = useState("java");
  const [data, setData]: any = useState([]);


  async function getLocations() {
    await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/`)
    .then(response => {
      setData(response.data)
    });
  }


  useEffect(() => {
    getLocations()
  }, [cidade])

  return (
    <Container>
      <PickerGeo selectedValue={cidade}
        onValueChange={(itemValue, itemIndex) => save(itemValue)}
      >
        {data.map((inf: any) => (
          <PickerGeo.Item  value={`${inf.id}`} label={inf.nome} />
        ))}
        
      </PickerGeo>
    </Container>
  );
};

export default GeoClimate;
