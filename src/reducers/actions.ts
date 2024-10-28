import { Item } from '../@types/types';

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREMENT_ITEM_QTD = 'INCREMENT_ITEM_QTD',
  DECREMENT_ITEM_QTD = 'DECREMENT_ITEM_QTD',
}

export type Actions =
  | {
      type: ActionTypes.ADD_ITEM;
      payload: { item: Item };
    }
  | {
      type: ActionTypes.REMOVE_ITEM;
      payload: { id: string };
    }
  | {
      type: ActionTypes.INCREMENT_ITEM_QTD;
      payload: { id: string };
    }
  | {
      type: ActionTypes.DECREMENT_ITEM_QTD;
      payload: { id: string };
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
