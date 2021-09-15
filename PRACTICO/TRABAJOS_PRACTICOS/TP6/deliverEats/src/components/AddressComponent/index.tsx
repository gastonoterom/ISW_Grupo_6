import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { OrderState } from '../../store/types/order';

interface Props {
  deliveryAddress: OrderState['deliveryAddress'];
  editAddress: () => void;
}

export const AddressComponent: React.FC<Props> = ({
  editAddress,
  deliveryAddress,
}): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Detalles de entrega</Text>
      </View>
      <View style={styles.card}>
        {/* Flex direction row para vista de mapa de ubicacion del usuario y detalles de la direccion */}
        <TouchableOpacity
          style={styles.addressDetailsContainer}
          activeOpacity={0.7}
          onPress={editAddress}>
          <View style={styles.addressItems}>
            <Text style={styles.addressText}>
              {deliveryAddress
                ? ` ${deliveryAddress?.street} - ${deliveryAddress?.number}`
                : 'Ingresa una direccion'}
            </Text>
            {deliveryAddress && (
              <Text>{`${deliveryAddress?.province} - ${deliveryAddress?.city}`}</Text>
            )}
          </View>
          <View style={{ ...styles.addressItems, marginLeft: 20 }}>
            <Icon name="right" size={20} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
