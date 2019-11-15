import { toggleLoading } from "../constans";

const INITIAL_DATA = {
  isLoading: true
};

export const loadingReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case toggleLoading:
      return { ...state, isLoading: !state.isLoading };
    default:
      return state;
  }
};
