import { COUNTER_INC, COUNTER_DEC } from "../constans";

const INITIAL_DATA = {
  count: 0
};

export const countReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case COUNTER_INC:
      return { ...state, count: state.count + 1 };
    case COUNTER_DEC:
      return { ...state, count: +1 };
    default:
      return state;
  }
};
