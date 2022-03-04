/*
 * Reducer actions related with login
 */
import * as types from './types';
import { DebitCardResponse, DebitCardRequest } from '../../models/DebitCardModel';

export function requestDebitCardInfo() {
  return {
    type: types.DEBIT_CARD_INFO_REQUEST,
  };
}

export function updateDebitCard(request: DebitCardRequest) {
  return {
    type: types.UPDATE_DEBIT_CARD,
    request,

  };
}

export function debitCardRequestFailed(failureResponse: any) {
  return {
    type: types.DEBIT_CARD_INFO_FAILURE,
    failureResponse,
  };
}

export function debitCardResponse(response: DebitCardResponse) {
  return {
    type: types.DEBIT_CARD_INFO_SUCCESS,
    response,

  };
}

export function enableLoader() {
  return {
    type: types.ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.ENABLE_LOADER,
  };
}