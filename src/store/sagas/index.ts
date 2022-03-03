/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../actions/types';
import requestDebitCardAsync from './debitCardSaga';

//Watcher Saga
export default function* watch() {
  yield all([takeEvery(types.DEBIT_CARD_INFO_REQUEST, requestDebitCardAsync)]);
}
