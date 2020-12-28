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




  async function loadClimate() {
    // let data = cidade.split('-')
    // await api.get(`https://apiadvisor.climatempo.com.br/api/v1/locale/city?name=${data[1]}&state=${data[0]}&token=c1cdba8979fd4fb41bf76d03b1d04eb9`)
    //   .then(response => {
    //     getTempo(response.data[0].id)
    //   });
  }

  async function getTempo(id: any) {
    // await api.get(`https://apiadvisor.climatempo.com.br/api/v1/weather/locale/${id}/current?token=c1cdba8979fd4fb41bf76d03b1d04eb9`)
    // .then(response => {
    //   console.log(response)
    // });
  }


  useEffect(() => {
    loadClimate()
  }, [cidade])

  return (
    <Container>
      <PickerGeo selectedValue={cidade}
        onValueChange={(itemValue, itemIndex) => save(itemValue)}
      >
        <PickerGeo.Item value="AC-Acre" label="Acre" />
        <PickerGeo.Item value="AL-Alagoas" label="Alagoas" />
        <PickerGeo.Item value="AP-Amapá" label="Amapá" />
        <PickerGeo.Item value="AM-Amazonas" label="Amazonas" />
        <PickerGeo.Item value="BA-Bahia" label="Bahia" />
        <PickerGeo.Item value="CE-Ceará" label="Ceará" />
        <PickerGeo.Item value="DF-Distrito Federal" label="Distrito Federal" />
        <PickerGeo.Item value="ES-Espírito Santo" label="Espírito Santo" />
        <PickerGeo.Item value="GO-Goiás" label="Goiás" />
        <PickerGeo.Item value="MA-Maranhão" label="Maranhão" />
        <PickerGeo.Item value="MT-Mato Grosso" label="Mato Grosso" />
        <PickerGeo.Item value="MS-Mato Grosso do Sul" label="Mato Grosso do Sul" />
        <PickerGeo.Item value="MG-Minas Gerais" label="Minas Gerais" />
        <PickerGeo.Item value="PA-Pará" label="Pará" />
        <PickerGeo.Item value="PB-Paraíba" label="Paraíba" />
        <PickerGeo.Item value="PR-Paraná" label="Paraná" />
        <PickerGeo.Item value="PE-Pernambuco" label="Pernambuco" />
        <PickerGeo.Item value="PI-Piauí" label="Piauí" />
        <PickerGeo.Item value="RJ-Rio de Janeiro" label="Rio de Janeiro" />
        <PickerGeo.Item value="RN-Rio Grande do Norte" label="Rio Grande do Norte" />
        <PickerGeo.Item value="RS-Rio Grande do Sul" label="Rio Grande do Sul" />
        <PickerGeo.Item value="RO-Rondônia" label="Rondônia" />
        <PickerGeo.Item value="RR-Roraima" label="Roraima" />
        <PickerGeo.Item value="SC-Santa Catarina" label="Santa Catarina" />
        <PickerGeo.Item value="SP-São Paulo" label="São Paulo" />
        <PickerGeo.Item value="SE-Sergipe" label="Sergipe" />
        <PickerGeo.Item value="TO-Tocantins" label="Tocantins" />
      </PickerGeo>
    </Container>
  );
};

export default GeoClimate;
