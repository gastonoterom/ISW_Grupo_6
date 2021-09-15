import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  titleContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  card: {
    shadowColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    backgroundColor: colors.whiteBackground,
    borderRadius: 10,
  },
  addressDetailsContainer: {
    flexDirection: 'row',
    padding: 10,

    marginHorizontal: 10,
    marginVertical: 10,
  },
  addressItems: {
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  deliveryDetails: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressText: {
    fontWeight: 'bold',
  },
});

export default styles;
