import React from 'react';
import {useColorScheme} from 'react-native';
import {View} from 'react-native';
import colors from '../../constants/colors';
import styles from './styles';

export const MarginContainer: React.FC = ({children}) => {
  const {container} = styles;
  return <View style={container}>{children}</View>;
};
