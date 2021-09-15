import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: { backgroundColor: colors.whiteBackground, flex: 1 },
  paymentButton: {
    marginHorizontal: 20,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    flexWrap: 'wrap',

    elevation: 3,
    backgroundColor: colors.whiteBackground,
    borderRadius: 15,
  },
  paymentText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  confirmButton: {
    alignItems: 'center',
    backgroundColor: colors.tealBlue,
    marginTop: 30,
    marginBottom: 40,
    padding: 20,
    borderRadius: 20,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 3,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  btnText: {
    color: colors.whiteBackground,
    fontWeight: 'bold',
    fontSize: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: colors.tealBlue,
  },
  buttonClose: {
    backgroundColor: colors.tealBlue,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  checkboxContainer: {
    padding: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
