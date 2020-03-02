import { INITIAL_STATE } from "../store/store";

export const tickersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_DATA":
      return {
        ...state,
        previousTicker: { ...state },
        ticker: { ...action.payload }
      };
    default:
      return { ...state };
  }
};
