
import { DEBIT_CARD_INFO_SUCCESS, UPDATE_DEBIT_CARD, DEBIT_CARD_INFO_FAILURE } from '../actions/types'

const initialState = {
  debitCard: null,
  debitCardError: null
};

export default (state = initialState, action: any) => {

  switch (action.type) {
    case DEBIT_CARD_INFO_SUCCESS: {
      return { ...state, debitCard: action.response };
    }
    case DEBIT_CARD_INFO_FAILURE: {
      return { ...state, debitCardError: action.failureResponse };
    }
    case UPDATE_DEBIT_CARD: {
      return { ...state, debitCard: action.request };
    }
    default:
      return state;
  }
};
