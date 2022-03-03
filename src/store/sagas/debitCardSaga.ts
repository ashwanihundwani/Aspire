/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put, call } from 'redux-saga/effects';
import * as debitCardActions from '../actions/debitCardActions';
import * as loadingActions from '../actions/loadingActions';

import { fetchDebitCard } from '../../api/api';

// Worker Saga that logins the user
export default function* requestDebitCardAsync(): Generator<any, any, any> {
  yield put(loadingActions.enableLoader());

  const response = yield call(fetchDebitCard);

  if (response.data) {
    yield put(debitCardActions.debitCardResponse(response.data));
    yield put(loadingActions.disableLoader());

  } else {
    yield put(debitCardActions.debitCardRequestFailed());
    yield put(loadingActions.disableLoader());
  }
}
