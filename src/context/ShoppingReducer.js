// types
import { CARD_ITEMS, PRICE, SAVE_DATA } from "./Type";

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CARD_ITEMS:
      return {
        ...state,
        cards: payload,
      };
    case SAVE_DATA:
      localStorage.setItem("shoppingCard", JSON.stringify(state.cards));
    case PRICE:
      return {
        ...state,
        price: state.cards.reduce(
          (result, prd) => result + prd.price * prd.qn,
          0
        ),
        quantity: state.cards.reduce((result, prd) => result + prd.qn, 0),
      };
    default:
      return state;
  }
};
