import { combineReducers } from 'redux';
import { orderReducer } from './order';

export const rootReducer = combineReducers({
  orderReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
