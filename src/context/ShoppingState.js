import React, { useReducer } from "react";

// data
import data from "../demo.json";

// types
import { CARD_ITEMS, PRICE, QUANTITY } from "./Type";

// Context
import ShoppingContext from "./ShoppingContext";

// reducer
import ShoppingReducer from "./ShoppingReducer";

const ShoppingState = ({ children }) => {
  // initial state
  const initialState = {
    items: data,
    loading: false,
    cards: [],
    price: 0,
    quantity: 0,
  };

  // reducer
  const [state, dispatch] = useReducer(ShoppingReducer, initialState);

  // funtions //
  const cardItems = (data) => {
    dispatch({
      type: CARD_ITEMS,
      payload: data,
    });
  };

  const setPrice = () => {
    dispatch({
      type: PRICE,
    });
  };

  return (
    <ShoppingContext.Provider
      value={{
        items: state.items,
        cards: state.cards,
        price: state.price,
        quantity: state.quantity,
        loading: state.loading,
        cardItems,
        setPrice,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};

export default ShoppingState;
