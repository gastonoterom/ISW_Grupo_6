export interface ProductModel {
  productId: string;
  productName: string;
  productPrice: number;
}

export type PaymentMethods = 'cash' | 'debit card';

export interface OrderState {
  products: ProductModel[];
  paymentMethod: PaymentMethods;
  deliveryAddress: PlaceDetails | null;
  cashAmount?: number;
  deliveryTime: DeliveryTime;
  cardInformation?: CardInformation;
}

export interface PlaceDetails {
  street: string;
  number: string;
  province: string;
  city: string;
  reference?: string;
}

export interface CardInformation {
  cardNumber: string;
  expDate: string;
  cvc: string;
  owner: string;
}

export type DeliveryTime = 'asap' | Date;

export interface AddAddressAction {
  readonly type: 'ADD_ADDRESS';
  payload: {
    address: OrderState['deliveryAddress'];
  };
}

export interface ChoosePaymentAction {
  readonly type: 'CHOOSE_PAYMENT_METHOD';
  payload: {
    paymentMethod: OrderState['paymentMethod'];
    cashAmount?: OrderState['cashAmount'];
  };
}

export interface AddCardInfoAction {
  readonly type: 'ADD_PAYMENT_CARD';
  payload: {
    cardInformation: CardInformation;
  };
}

export type OrderActions =
  | AddAddressAction
  | ChoosePaymentAction
  | AddCardInfoAction;
