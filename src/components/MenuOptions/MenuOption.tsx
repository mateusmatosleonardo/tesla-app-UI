import React from 'react';
import * as S from './styles';
import {
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';

export interface IMenuOptions {
  name: string;
  icon: "symbol" | "function" | "compare";
  navigation: () => void;
}

const MenuOptions: React.FC<IMenuOptions> = ({ name, icon, navigation }: IMenuOptions) => {
  return (
    <S.OptionRow onPress={navigation}>
      <MaterialCommunityIcons name={icon} size={24} color="gray" />
      <S.OptionTitle>{name}</S.OptionTitle>
      <MaterialIcons name="keyboard-arrow-right" size={24} color="gray" style={{ marginLeft: 'auto' }} />
    </S.OptionRow>
  );
}

export default MenuOptions;