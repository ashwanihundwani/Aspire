/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */

import { ENABLE_LOADER, DISABLE_LOADER } from '../actions/types';

const initialState = {
  isLoading: false,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ENABLE_LOADER: {
      return { ...state, isLoading: true };
    }
    case DISABLE_LOADER: {
      return { ...state, isLoading: false };
    }
    default:
      return state;
  }
}
