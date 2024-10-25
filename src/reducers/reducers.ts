import { produce } from 'immer';
import { Actions, ActionTypes } from './actions';
import { Item } from '../@types/types';

interface CartState {
  cart: Item[];
}

export const cartReducer = (state: CartState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return produce(state, draft => {
        const existingItem = draft.cart.find(
          item => item.id === action.payload.item.id
        );

        if (existingItem) {
          existingItem.qtd += action.payload.item.qtd;
        } else {
          draft.cart.push(action.payload.item);
        }
      });

    case ActionTypes.REMOVE_ITEM:
      return produce(state, draft => {
        draft.cart = draft.cart.filter(item => item.id !== action.payload.id);
      });

    default:
      return state;
  }
};
