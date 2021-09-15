import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  storeInfoContainer: {
    flexDirection: 'row',
    marginBottom: 20,

    paddingHorizontal: 15,
    paddingVertical: 20,
    borderBottomWidth: 2,
    marginHorizontal: 10,
    borderBottomColor: 'rgba(158, 150, 150, .2)',
  },
  image: {
    width: 60,
    height: 60,
    backgroundColor: 'rgba(158, 150, 150, .2)',
    borderRadius: 10,
  },
  storeTextContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '10%',
  },
  textBold: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  pricesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  separator: {
    marginHorizontal: 20,
  },
  pricesText: {
    opacity: 0.5,
  },
  totalPriceText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default styles;
