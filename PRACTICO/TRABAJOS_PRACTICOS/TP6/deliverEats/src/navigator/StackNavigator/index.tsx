import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { createStackNavigator } from '@react-navigation/stack';
import { AddressScreen } from '../../screens/AddressScreen';
import { PaymentScreen } from '../../screens/PaymentDetails';
import { StackNavigatorParams } from '../../types/types';
import { TouchableOpacity, useColorScheme } from 'react-native';
import styles from './styles';
import { FinalStepScreen } from '../../screens/FinalStepScreen';

export const Stack = createStackNavigator<StackNavigatorParams>();

export const MainStackNavigator: React.FC = (): JSX.Element => {
  return (
    <Stack.Navigator initialRouteName="FinalStepScreen">
      <Stack.Screen
        name="FinalStepScreen"
        options={{ headerTitle: '¡Último Paso!' }}
        component={FinalStepScreen}
      />
      <Stack.Screen
        name="AddressScreen"
        component={AddressScreen}
        options={({ navigation }) => ({
          headerTitle: 'Dirección',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="left" size={20} style={{ marginLeft: 20 }} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="PaymentDetailsScreen"
        component={PaymentScreen}
        options={({ navigation }) => ({
          headerTitle: 'Método de Pago',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="left" size={20} style={{ marginLeft: 20 }} />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};
