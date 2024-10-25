import { Item } from '../@types/types';

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
}

export type Actions =
  | {
      type: ActionTypes.ADD_ITEM;
      payload: { item: Item };
    }
  | {
      type: ActionTypes.REMOVE_ITEM;
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
