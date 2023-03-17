import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 22px;
  padding: 0px 22px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.GRAY};
  margin-bottom: 8px;
`;

export const SubTitle = styled.Text`
  font-weight: 500;
  color: gray;
`;

export const Box = styled.View``;

export const Car = styled.Image`
  width: 100%;
  height: 270px;
`;

export const WrapperControls = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin: 5px 0px 20px 0px;
`;
