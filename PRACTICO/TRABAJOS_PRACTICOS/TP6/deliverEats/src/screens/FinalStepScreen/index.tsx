import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { Alert, Modal, Pressable, ScrollView, Text, View } from 'react-native';
import { AddressComponent } from '../../components/AddressComponent';
import { OrderDetails } from '../../components/OrderDetails';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import { StackScreenProps } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/reducers';
import CheckBox from '@react-native-community/checkbox';
import DateTimePicker from '@react-native-community/datetimepicker';

interface Props extends StackScreenProps<any, any> {}

export const FinalStepScreen: React.FC<Props> = ({
  navigation,
}): JSX.Element => {
  const {
    deliveryAddress,
    products,
    paymentMethod,
    deliveryTime,
    cashAmount,
    cardInformation,
  } = useSelector((state: AppState) => state.orderReducer);

  const [asapCheckBox, setAsapCheckbox] = useState<boolean>(true);

  const [deliveryDeadline, setDeliveryDeadline] = useState<Date>(new Date());

  const [modalSuccess, setModalSuccess] = useState<boolean>(false);

  const [modalError, setModalError] = useState<boolean>(false);

  const goToAddressScreen = () => {
    navigation.navigate('AddressScreen');
  };

  const goToPaymentMethodScreen = () => {
    navigation.navigate('PaymentDetailsScreen');
  };

  const confirmOrder = () => {
    if (!asapCheckBox) {
      if (deliveryDeadline.getTime() - new Date().getTime() <= 0) {
        setModalError(true);
        return;
      }
    }
    if (!deliveryAddress) {
      setModalError(true);
      return;
    }
    if (paymentMethod === 'debit card' && !cardInformation) {
      setModalError(true);
      return;
    }
    if (paymentMethod === 'cash' && !cashAmount) {
      setModalError(true);
      return;
    }
    setModalSuccess(true);
  };
  return (
    <ScrollView style={styles.container}>
      <OrderDetails products={products} />
      <AddressComponent
        editAddress={goToAddressScreen}
        deliveryAddress={deliveryAddress}
      />

      <TouchableOpacity
        style={styles.paymentButton}
        activeOpacity={0.7}
        onPress={() => goToPaymentMethodScreen()}>
        <Text style={styles.paymentText}>Forma de Pago</Text>

        <Text>
          {paymentMethod === 'cash'
            ? `Efectivo ${
                cashAmount
                  ? `con $${cashAmount}`
                  : `(Ingresar con cuanto va a abonar)`
              }`
            : 'Tarjeta'}
        </Text>

        <Icon name="right" size={20} />
      </TouchableOpacity>
      <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>
          Horario de Entrega
        </Text>
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          onValueChange={newValue => setAsapCheckbox(newValue)}
          value={asapCheckBox}
          onAnimationType="bounce"
          offAnimationType="bounce"
        />
        <Text style={{ marginLeft: 20 }}>Lo antes posible</Text>
      </View>
      {!asapCheckBox && (
        <View style={{ marginHorizontal: 80 }}>
          <DateTimePicker
            value={deliveryDeadline}
            mode="datetime"
            display="compact"
            onChange={(_, date) => setDeliveryDeadline(date!)}
          />
        </View>
      )}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalSuccess}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalSuccess(!modalSuccess);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Compra Confirmada!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalSuccess(!modalSuccess)}>
              <Text style={styles.textStyle}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Modal animationType="fade" transparent={true} visible={modalError}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              No se pudo confirmar la compra, verifica los datos ingresados.
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalError(!modalError)}>
              <Text style={styles.textStyle}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        style={styles.confirmButton}
        activeOpacity={0.7}
        onPress={confirmOrder}>
        <Text style={styles.btnText}>Confirmar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
