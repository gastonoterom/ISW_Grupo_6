import { Dispatch } from 'react';
import { CardInformation, OrderActions, OrderState } from '../types/order';

export const chooseAddress = (
  deliveryAddress: OrderState['deliveryAddress'],
) => {
  return (dispatch: Dispatch<OrderActions>) => {
    dispatch({
      type: 'ADD_ADDRESS',
      payload: {
        address: deliveryAddress,
      },
    });
  };
};

export const choosePaymentMethod = (
  paymentMethod: OrderState['paymentMethod'],
  cashAmount?: OrderState['cashAmount'],
) => {
  return async (dispatch: Dispatch<OrderActions>) => {
    if (paymentMethod === 'cash')
      dispatch({
        type: 'CHOOSE_PAYMENT_METHOD',
        payload: {
          paymentMethod,
          cashAmount,
        },
      });
    else {
      dispatch({
        type: 'CHOOSE_PAYMENT_METHOD',
        payload: {
          paymentMethod,
        },
      });
    }
  };
};

export const addCardInformation = (cardInformation: CardInformation) => {
  return async (dispatch: Dispatch<OrderActions>) => {
    dispatch({
      type: 'ADD_PAYMENT_CARD',
      payload: {
        cardInformation,
      },
    });
  };
};
