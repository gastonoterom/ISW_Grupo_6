import { useColorScheme } from 'react-native';
import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#FCFCFC',
    borderRadius: 5,
    padding: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  paymentText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  cardInfoInputRow: { flexDirection: 'row', marginTop: 20 },
  confirmBtn: {
    alignItems: 'center',
    backgroundColor: colors.tealBlue,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    marginTop: 20,
  },
  confirmText: {
    color: colors.whiteBackground,
    fontWeight: 'bold',
  },
  cardInputContainer: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
});

export default styles;
