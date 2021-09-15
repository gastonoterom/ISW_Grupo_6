import products from '../../constants/products';
import { OrderActions, OrderState } from '../types/order';

const initialState: OrderState = {
  products: products,
  paymentMethod: 'cash',
  deliveryAddress: null,
  deliveryTime: 'asap',
};

export const orderReducer = (
  state: OrderState = initialState,
  action: OrderActions,
): OrderState => {
  switch (action.type) {
    case 'ADD_ADDRESS':
      return {
        ...state,
        deliveryAddress: action.payload.address,
      };
    case 'CHOOSE_PAYMENT_METHOD':
      return {
        ...state,
        paymentMethod: action.payload.paymentMethod,
        cashAmount: action.payload.cashAmount,
      };
    case 'ADD_PAYMENT_CARD':
      if (state.paymentMethod === 'cash') return state;
      return {
        ...state,
        cardInformation: action.payload.cardInformation,
      };
    default:
      return state;
  }
};
