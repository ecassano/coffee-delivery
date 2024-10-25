import { createContext, ReactNode, useReducer } from "react";
import { Item } from "../@types/types";
import { addItemAction, removeItemAction } from "../reducers/actions";
import { cartReducer } from "../reducers/reducers";

interface CartContextType {
  cart: Item[];
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContextProvider = ({
  children,
}: CartContextProviderProps) => {
  const [cartState, dispatch] = useReducer(cartReducer, { cart: [] });

  const addItem = (item: Item) => {
    dispatch(addItemAction(item));
  };

  const removeItem = (id: string) => {
    dispatch(removeItemAction(id));
  };

  return (
    <CartContext.Provider value={{ cart: cartState.cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
