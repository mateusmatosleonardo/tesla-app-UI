import React from 'react';
import * as S from './styles';

import Layout from '../../components/Layout/Layout';
import climateImage from '../../assets/climate.png';

const ClimateScreen: React.FC = () => {
  return (
    <Layout>
      <S.ClimateImage source={climateImage} resizeMode="cover" />
    </Layout>
  )
}

export default ClimateScreen;