import { NavigateFunction } from 'react-router-dom';
import { Item } from '../@types/types';
import { OrderInfo } from '../pages/Cart';

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREMENT_ITEM_QTD = 'INCREMENT_ITEM_QTD',
  DECREMENT_ITEM_QTD = 'DECREMENT_ITEM_QTD',
  CHECKOUT = 'CHECKOUT',
}

export type Actions =
  | {
      type: ActionTypes.ADD_ITEM;
      payload: { item: Item };
    }
  | {
      type:
        | ActionTypes.REMOVE_ITEM
        | ActionTypes.INCREMENT_ITEM_QTD
        | ActionTypes.DECREMENT_ITEM_QTD;
      payload: { id: Item['id'] };
    }
  | {
      type: ActionTypes.CHECKOUT;
      payload: {
        order: OrderInfo;
        callback: NavigateFunction;
      };
    };

export const addItemAction = (item: Item): Actions => ({
  type: ActionTypes.ADD_ITEM,
  payload: { item },
});

export const removeItemAction = (id: string): Actions => ({
  type: ActionTypes.REMOVE_ITEM,
  payload: { id },
});

export const incrementItemQtdAction = (id: string): Actions => ({
  type: ActionTypes.INCREMENT_ITEM_QTD,
  payload: { id },
});

export const decrementItemQtdAction = (id: string): Actions => ({
  type: ActionTypes.DECREMENT_ITEM_QTD,
  payload: { id },
});

export const checkoutAction = (
  order: OrderInfo,
  callback: NavigateFunction
): Actions => ({
  type: ActionTypes.CHECKOUT,
  payload: { order, callback },
});
