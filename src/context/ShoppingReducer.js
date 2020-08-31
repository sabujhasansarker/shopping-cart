// types
import {
  CARD_ITEMS,
  PRICE,
  SAVE,
  REMOVE,
  CHECKOUT,
  GET_USER,
  LOGOUT,
  GET_DATA,
} from "./Type";

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_DATA:
      return {
        ...state,
        items: payload,
        loading: true,
      };
    case CARD_ITEMS:
      return {
        ...state,
        cards: payload,
      };
    case REMOVE:
      return {
        ...state,
        cards: state.cards.filter((card) => payload.id !== card.id && card),
      };
    case SAVE:
      localStorage.setItem("shoppingCard", JSON.stringify(state.cards));

    case PRICE:
      return {
        ...state,
        price:
          state.cards &&
          state.cards.reduce((result, prd) => result + prd.price * prd.qn, 0),
        quantity:
          state.cards &&
          state.cards.reduce((result, prd) => result + prd.qn, 0),
      };
    case CHECKOUT:
      localStorage.setItem("shoppingCard", JSON.stringify([]));
      return {
        ...state,
        cards: [],
        price: null,
        quantity: 0,
      };
    case GET_USER:
      return {
        ...state,
        isAutination: true,
        loading: false,
        user: payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAutination: false,
        loading: false,
      };
    default:
      return state;
  }
};
