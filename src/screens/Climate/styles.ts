import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const ClimateImage = styled.Image`
  width: 100%;
  height: 65%;
`;

export const ButtonGoBack = styled.Pressable`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50px;
  left: 25px;
  background-color: #2f3030;
`;

export const Footer = styled.Pressable`
  align-items: center;
  margin-top: auto;
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  font-size: ${RFValue(15)}px;
  margin: 20px 0px;
  color: gray;
`;

export const ControlsRow = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const IconButtonContainer = styled.View`
  align-items: center;
`;

export const IcontButtonText = styled.Text`
  color: #cecece;
  font-size: ${RFValue(16)}px;
  font-weight: 600;
  margin-top: 10px;
`;

export const TemperatureContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TemperatureText = styled.Text`
  color: #ffffff;
  font-size: ${RFValue(38)}px;
  font-weight: 300;
  margin: 0px 20px;
`;
