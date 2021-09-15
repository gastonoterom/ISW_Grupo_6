import React from 'react';
import { Image, Text, View } from 'react-native';
import storeImage from '../../../logo.png';
import { OrderState } from '../../store/types/order';
import styles from './styles';

interface Props {
  products: OrderState['products'];
}

export const OrderDetails: React.FC<Props> = ({ products }): JSX.Element => {
  const orderPrice = products.reduce((acc, item) => {
    return (acc += item.productPrice);
  }, 0);
  return (
    <View style={styles.container}>
      {/* Flex direction row para imagen de local, nombre y tiempos de entrega */}
      <View style={styles.storeInfoContainer}>
        {/* Imagen del Local */}
        <Image source={storeImage} style={styles.image} />
        {/* Flex direction Column para nombre del local y tiempo de entrega */}
        <View style={styles.storeTextContainer}>
          <Text style={styles.textBold}>Burger King Buen Pastor</Text>
          <Text>24 - 34 min &#183; Sin mínimo</Text>
        </View>
      </View>
      <View style={styles.separator}>
        <View style={styles.pricesContainer}>
          <Text style={styles.pricesText}>Subtotal</Text>
          <Text style={styles.pricesText}>${orderPrice}</Text>
        </View>
        <View style={styles.pricesContainer}>
          <Text style={styles.pricesText}>Envío</Text>
          <Text style={styles.pricesText}>$109</Text>
        </View>
        <View style={styles.pricesContainer}>
          <Text style={styles.totalPriceText}>Total</Text>
          <Text style={styles.totalPriceText}>
            ${(orderPrice + 109).toLocaleString('es-AR')}
          </Text>
        </View>
      </View>
    </View>
  );
};
