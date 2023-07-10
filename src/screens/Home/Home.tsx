import React from 'react';
import { ListRenderItemInfo, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Layout from '../../components/Layout/Layout';
import * as S from './styles';
import car from '../../assets/car.png';
import {
  FontAwesome,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons
} from '@expo/vector-icons';
import menuOptions from '../../mocks/menuOptions';
import MenuOptions, { IMenuOptions } from '../../components/MenuOptions/MenuOption';

const Controls = () => {

  return (
    <React.Fragment>
      <S.Car source={car} resizeMode="contain" />
      <S.WrapperControls>
        <Entypo name="lock" size={26} color="gray" />
        <MaterialCommunityIcons name="fan" size={26} color="gray" />
        <FontAwesome5 name="bolt" size={26} color="gray" />
        <Ionicons name="car-sport-sharp" size={26} color="gray" />
      </S.WrapperControls>
    </React.Fragment>
  )
}

const Home: React.FC = () => {

  const navigation = useNavigation<any>();

  const renderItem = ({ item }: ListRenderItemInfo<IMenuOptions>) =>
    <MenuOptions {...item} navigation={() => navigation.navigate("Climate")} />

  return (
    <Layout>
      <S.Header>
        <S.Box>
          <S.Title>My Model S</S.Title>
          <S.SubTitle>Parked</S.SubTitle>
        </S.Box>
        <FontAwesome name="user-circle" size={30} color="gray" />
      </S.Header>

      <FlatList
        data={Object(menuOptions)}
        keyExtractor={item => item.name}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={Controls}
      />

    </Layout>
  );
}

export default Home;