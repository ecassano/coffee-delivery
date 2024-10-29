import { produce } from 'immer';
import { Actions, ActionTypes } from './actions';
import { Item } from '../@types/types';
import { OrderInfo } from '../pages/Cart';

interface CartState {
  cart: Item[];
  orders: OrderInfo[];
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
    case ActionTypes.INCREMENT_ITEM_QTD:
      return produce(state, draft => {
        draft.cart.forEach(item => {
          if (item.id === action.payload.id) {
            item.qtd += 1;
          }
        });
      });
    case ActionTypes.DECREMENT_ITEM_QTD:
      return produce(state, draft => {
        draft.cart.forEach(item => {
          if (item.id === action.payload.id) {
            if (item.qtd <= 1) {
              item.qtd = 1;
              return;
            }
            item.qtd -= 1;
          }
        });
      });
    case ActionTypes.CHECKOUT:
      return produce(state, draft => {
        const newOrder = {
          id: new Date().getTime(),
          items: state.cart,
          ...action.payload.order,
        };
        draft.orders.push(newOrder);
        draft.cart = [];

        action.payload.callback(`/order/${newOrder.id}/success`);
      });

    default:
      return state;
  }
};
