
import { DEBIT_CARD_INFO_SUCCESS, UPDATE_DEBIT_CARD } from '../actions/types'

const initialState = {
  debitCard: null
};

export default (state = initialState, action: any) => {

  switch (action.type) {
    case DEBIT_CARD_INFO_SUCCESS: {

      return { ...state, debitCard: action.response };
    }
    case UPDATE_DEBIT_CARD: {

      return { ...state, debitCard: action.request };
    }
    default:
      return state;
  }
};
