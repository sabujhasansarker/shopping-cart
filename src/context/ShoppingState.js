import React, { useReducer, useEffect } from "react";

// data
import data from "../demo.json";

// types
import {
  CARD_ITEMS,
  PRICE,
  SAVE,
  REMOVE,
  CHECKOUT,
  GET_USER,
  LOGOUT,
} from "./Type";

// Context
import ShoppingContext from "./ShoppingContext";

// reducer
import ShoppingReducer from "./ShoppingReducer";

// auth
import { auth } from "../config/fire";

const ShoppingState = ({ children }) => {
  // initial state
  const initialState = {
    items: data,
    loading: true,
    cards: [],
    price: 0,
    quantity: 0,
    isAutination: false,
    user: null,
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

  const cardItems = (prvData, data, callBack) => {
    let findOrg = prvData && prvData.find((i) => i.id === data.id);
    if (findOrg) {
      callBack === "-"
        ? findOrg.qn > 1
          ? (findOrg.qn -= 1)
          : (findOrg.qn = 1)
        : (findOrg.qn += 1);
      prvData.filter((ca) => (ca.id === data.id ? findOrg : ca));
    } else {
      dispatch({
        type: CARD_ITEMS,
        payload: prvData ? [...prvData, data] : [data],
      });
    }
    dispatch({
      type: SAVE,
    });
  };

  const setPrice = () => {
    dispatch({
      type: PRICE,
    });
  };

  const removeItem = (data) => {
    dispatch({
      type: REMOVE,
      payload: data,
    });
    dispatch({
      type: SAVE,
    });
  };

  const checkOut = () => {
    dispatch({
      type: CHECKOUT,
    });
  };

  const getUser = () => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        dispatch({
          type: GET_USER,
          payload: user.providerData[0],
        });
      } else {
        dispatch({
          type: LOGOUT,
        });
      }
    });
  };

  const logout = () => {
    auth.signOut();
    dispatch({
      type: LOGOUT,
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
        isAutination: state.isAutination,
        user: state.user,
        cardItems,
        setPrice,
        cardItemsRefresh,
        removeItem,
        checkOut,
        getUser,
        logout,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};

export default ShoppingState;
