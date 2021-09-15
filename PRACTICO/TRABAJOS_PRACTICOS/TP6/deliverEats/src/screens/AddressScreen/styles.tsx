import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
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
  confirmButton: {
    marginTop: 90,
    alignItems: 'center',
    backgroundColor: colors.tealBlue,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 15,
    color: colors.whiteBackground,
    fontWeight: 'bold',
  },
});

export default styles;
