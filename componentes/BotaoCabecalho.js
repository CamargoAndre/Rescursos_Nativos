import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import Cores from '../constantes/Cores';
import { Platform } from 'react-native';

// import { Container } from './styles';

const BotaoCabecalho = (props) => {
  return (
    <HeaderButton 
        {...props}
        IconComponent={Ionicons}
        iconSize={23}
        color={Platform.OS === 'android' ? 'white' : Cores.primary}
    />

  );
}

export default BotaoCabecalho;

