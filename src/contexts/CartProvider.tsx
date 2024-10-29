import { createContext, ReactNode, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { Item } from "../@types/types";
import { OrderInfo } from "../pages/Cart";
import { addItemAction, checkoutAction, decrementItemQtdAction, incrementItemQtdAction, removeItemAction } from "../reducers/actions";
import { cartReducer } from "../reducers/reducers";

interface CartContextType {
  cart: Item[];
  orders: OrderInfo[];
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
  incrementItemQtd: (id: string) => void;
  decrementItemQtd: (id: string) => void;
  checkout: (order: OrderInfo) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContextProvider = ({
  children,
}: CartContextProviderProps) => {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      orders: [],
    },
    (cartState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return cartState
    },
  )
  const navigate = useNavigate();

  const addItem = (item: Item) => {
    dispatch(addItemAction(item));
  };

  const removeItem = (id: string) => {
    dispatch(removeItemAction(id));
  };

  const incrementItemQtd = (id: string) => {
    dispatch(incrementItemQtdAction(id));
  }

  const decrementItemQtd = (id: string) => {
    dispatch(decrementItemQtdAction(id));
  }

  const checkout = (order: OrderInfo) => {
    dispatch(checkoutAction(order, navigate))
  }

  useEffect(() => {
    if (cartState) {
      const stateJSON = JSON.stringify(cartState)

      localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
    }
  }, [cartState])

  return (
    <CartContext.Provider value={{ cart: cartState.cart, orders: cartState.orders, addItem, removeItem, incrementItemQtd, decrementItemQtd, checkout }}>
      {children}
    </CartContext.Provider>
  );
};
