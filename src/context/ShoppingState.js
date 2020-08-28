import React, { useReducer, useEffect } from "react";

// data
import data from "../demo.json";

// types
import { CARD_ITEMS, PRICE, SAVE_DATA } from "./Type";

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

  useEffect(() => {
    cardItemsRefresh();
  }, []);

  const cardItemsRefresh = () => {
    dispatch({
      type: CARD_ITEMS,
      payload: JSON.parse(localStorage.getItem("shoppingCard")),
    });
    setPrice();
  };

  const cardItems = (prvData, data) => {
    let findOrg = prvData.find((i) => i.id === data.id);
    if (findOrg) {
      findOrg.qn += 1;
      prvData.filter((ca) => (ca.id === data.id ? findOrg : ca));
    } else {
      dispatch({
        type: CARD_ITEMS,
        payload: [...prvData, data],
      });
    }
    dispatch({
      type: SAVE_DATA,
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
        cardItemsRefresh,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};

export default ShoppingState;
