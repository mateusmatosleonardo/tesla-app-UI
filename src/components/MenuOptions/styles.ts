import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const OptionRow = styled.Pressable`
  flex-direction: row;
  align-items: center;
  padding: 0px 22px;
  margin: 20px 0px;
`;

export const OptionTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.GRAY};
  margin-left: 10px;
`;
