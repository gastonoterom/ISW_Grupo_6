import { Picker } from '@react-native-picker/picker';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { MarginContainer } from '../../components/MarginContainer';
import provincias from '../../constants/provincias';
import { useForm } from '../../hooks/useForm';
import { chooseAddress } from '../../store/actions/order';
import styles from './styles';

interface Props extends StackScreenProps<any, any> {}

export const AddressScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { form, onChangeField } = useForm({
    street: '',
    number: '',
    province: provincias[0].properties.nombre, //Setear primera provincia que sea la primera del array
    city: '',
    reference: '',
  });

  const validForm =
    form.city.length > 0 &&
    form.street.length > 0 &&
    form.number.length > 0 &&
    form.province.length > 0;

  const submitAddressDetails = () => {
    dispatch(chooseAddress(form));
    navigation.goBack();
  };

  return (
    <MarginContainer>
      <View>
        <View style={styles.inputContainer}>
          <TextInput
            style={{
              ...styles.textInput,
              width: '60%',
            }}
            placeholder="Calle"
            placeholderTextColor="#9C9C9C"
            onChangeText={text => onChangeField(text, 'street')}
          />
          <TextInput
            style={{
              ...styles.textInput,
              width: '30%',
            }}
            placeholder="Número"
            placeholderTextColor="#9C9C9C"
            onChangeText={text => onChangeField(text, 'number')}
          />
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Picker
            style={{
              ...styles.textInput,
              width: '80%',
            }}
            selectedValue={form.province}
            onValueChange={itemValue => onChangeField(itemValue, 'province')}>
            {provincias.map(provincia => (
              <Picker.Item
                key={provincia.properties.id}
                label={provincia.properties.nombre}
                value={provincia.properties.nombre}
              />
            ))}
          </Picker>
        </View>
        <TextInput
          style={{
            ...styles.textInput,
            marginTop: 20,
          }}
          placeholder="Ciudad"
          placeholderTextColor="#9C9C9C"
          onChangeText={text => onChangeField(text, 'city')}
        />

        <TextInput
          style={{
            ...styles.textInput,
            marginTop: 20,
          }}
          placeholder="Referencia (opcional)"
          placeholderTextColor="#9C9C9C"
          onChangeText={text => onChangeField(text, 'reference')}
        />
      </View>
      <TouchableOpacity
        style={styles.confirmButton}
        disabled={!validForm}
        onPress={validForm ? submitAddressDetails : undefined}
        activeOpacity={0.8}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>
    </MarginContainer>
  );
};
