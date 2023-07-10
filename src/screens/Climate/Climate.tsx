import React from 'react';
import * as S from './styles';

import { useNavigation } from '@react-navigation/native';

import Layout from '../../components/Layout/Layout';
import climateImage from '../../assets/climate.png';

import Chevron from '@expo/vector-icons/Entypo';
import Power from '@expo/vector-icons/MaterialCommunityIcons';
import CarDoor from '@expo/vector-icons/MaterialCommunityIcons';

const ClimateScreen: React.FC = () => {

  const [temperature, setTemperature] = React.useState(68);
  const [on, setOn] = React.useState(false);

  const navigation = useNavigation();

  return (
    <Layout>
      <S.ClimateImage source={climateImage} resizeMode="cover" />
      <S.ButtonGoBack onPress={() => navigation.goBack()}>
        <Chevron name='chevron-left' color="#ffffff" size={22} />
      </S.ButtonGoBack>
      <S.Footer>
        <S.Label>Interior 74°F - Exterior 66°F</S.Label>
        <S.ControlsRow>
          <S.IconButtonContainer>
            <Power
              onPress={() => setOn(!on)}
              name='power'
              color={on ? '#ffffff' : 'gray'}
              size={38} />
            <S.IcontButtonText>{on ? 'On' : 'Off'}</S.IcontButtonText>
          </S.IconButtonContainer>

          <S.TemperatureContainer>
            <Chevron
              onPress={() => setTemperature(temperature - 1)}
              name='chevron-left'
              color="gray"
              size={30}
            />
            <S.TemperatureText>{temperature}°</S.TemperatureText>
            <Chevron
              onPress={() => setTemperature(temperature + 1)}
              name='chevron-right'
              color="gray"
              size={30} />
          </S.TemperatureContainer>

          <S.IconButtonContainer>
            <CarDoor name='car-door' color="#cecece" size={38} />
            <S.IcontButtonText>Vent</S.IcontButtonText>
          </S.IconButtonContainer>
        </S.ControlsRow>
      </S.Footer>
    </Layout>
  )
}

export default ClimateScreen;