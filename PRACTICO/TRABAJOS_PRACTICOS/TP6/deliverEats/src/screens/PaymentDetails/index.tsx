import CheckBox from '@react-native-community/checkbox';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { MarginContainer } from '../../components/MarginContainer';
import { useForm } from '../../hooks/useForm';
import {
  addCardInformation,
  choosePaymentMethod,
} from '../../store/actions/order';
import { AppState } from '../../store/reducers';
import styles from './styles';

interface Props extends StackScreenProps<any, any> {}

export const PaymentScreen: React.FC<Props> = ({ navigation }) => {
  const { paymentMethod } = useSelector(
    (state: AppState) => state.orderReducer,
  );
  const orderPrice = 2009;
  const dispatch = useDispatch();
  const [visaCheckbox, setVisaCheckbox] = useState<boolean>(
    paymentMethod === 'debit card',
  );

  const { form, onChangeField } = useForm({
    cardNumber: '',
    expDate: '',
    cvc: '',
    owner: '',
  });

  const [cashCheckbox, setCashCheckbox] = useState<boolean>(
    paymentMethod === 'cash',
  );

  const [cash, setCash] = useState<number>(0);

  const validForm = () => {
    if (cashCheckbox) {
      if (cash > 0 && !(cash < orderPrice)) {
        return true;
      }
      return false;
    } else {
      if (
        form.cardNumber.length > 0 &&
        form.cvc.length > 0 &&
        form.expDate.length > 0 &&
        form.owner.length > 0
      ) {
        return true;
      }
      return false;
    }
  };

  const confirmPaymentMethod = () => {
    console.log(visaCheckbox);
    dispatch(
      choosePaymentMethod(
        visaCheckbox ? 'debit card' : 'cash',
        visaCheckbox ? undefined : cash,
      ),
    );

    if (visaCheckbox) {
      dispatch(addCardInformation(form));
    }

    navigation.goBack();
  };

  return (
    <MarginContainer>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <CheckBox
          value={visaCheckbox}
          onValueChange={newValue => {
            setVisaCheckbox(newValue);
            setCashCheckbox(!newValue);
          }}
        />
        <Text style={styles.paymentText}>Tarjeta VISA</Text>
        <CheckBox
          value={cashCheckbox}
          onValueChange={newValue => {
            setCashCheckbox(newValue);
            setVisaCheckbox(!newValue);
          }}
        />
        <Text style={styles.paymentText}>Efectivo</Text>
      </View>
      {cashCheckbox ? (
        <View style={styles.cardInputContainer}>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            onChangeText={text => setCash(Number(text))}
            placeholder="Ingresa con cuanto vas a abonar"
            placeholderTextColor="#9C9C9C"
          />
        </View>
      ) : (
        <View style={styles.cardInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Numero de tarjeta"
            placeholderTextColor="#9C9C9C"
            onChangeText={text => onChangeField(text, 'cardNumber')}
          />
          <View style={styles.cardInfoInputRow}>
            <TextInput
              style={{
                ...styles.textInput,
                width: '73%',
              }}
              placeholder="Fecha de vencimiento"
              placeholderTextColor="#9C9C9C"
              onChangeText={text => onChangeField(text, 'expDate')}
            />
            <TextInput
              style={{
                ...styles.textInput,
                width: '20%',
                marginLeft: 20,
              }}
              placeholder="CVC"
              placeholderTextColor="#9C9C9C"
              onChangeText={text => onChangeField(text, 'cvc')}
            />
          </View>
          <TextInput
            style={{
              ...styles.textInput,
              marginTop: 20,
            }}
            keyboardType="default"
            autoCorrect={false}
            placeholder="Nombre del titular"
            placeholderTextColor="#9C9C9C"
            onChangeText={text => onChangeField(text, 'owner')}
          />
        </View>
      )}
      <TouchableOpacity
        style={styles.confirmBtn}
        activeOpacity={0.8}
        disabled={!validForm()}
        onPress={validForm() ? confirmPaymentMethod : undefined}>
        <Text style={styles.confirmText}>Confirmar</Text>
      </TouchableOpacity>
    </MarginContainer>
  );
};
