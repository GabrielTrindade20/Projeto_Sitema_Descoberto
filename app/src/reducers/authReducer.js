import { SELECT_RADIO_OPTION } from '../actions/authActions';

// Estado inicial
const initialState = {
  selectedOption: null,
};

const radioReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_RADIO_OPTION:
      return {
        ...state,
        selectedOption: action.payload,
      };
    default:
      return state;
  }
};

export default radioReducer;
