/**
 * @format
 */

import 'react-native';
import React from 'react';
import DebitCard from '../../src/screens/DebitCard';
import renderer from 'react-test-renderer';

import { Provider, useStore } from 'react-redux';
import reducers from '../../src/store/reducers'
import {cleanup,render,  fireEvent,} from '@testing-library/react-native'
import { testIDs, CommonString } from '../../src/utils/constants';

// Debit card
// 1. Click show hide button => expect Card Number & CVV to be hidden (Done)
// 2. Click Weekly spend toggle => expect Progressbar to be hidden. (In Progress)
// 3. Click Weekly spend row => expect WeeklySpend screen to appear.

//WeeklySpentAmount:
// 1. Click all 5000, 10000, 20000 buttons and check if amount label is updated.
// 2. Check Save button is disable if amount label is blank
// 3. Check Save button is enabled if amount label is filled
// 4. Click Save button => Debit Card screen should show up.
// 5. Check Weekly spend limit is updated on Debit Card screen.


it('renders correctly', () => {
    const tree = renderer
      .create(<Provider store={store}><DebitCard /></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
});

// it("show/hide Spend Progress on switch button toggle", () => {
//   const store = useStore().
//   const { getByTestId } = render(<Provider store={store}><DebitCard /></Provider>)

//   const testId  = "touchable"
//   getByTestId("dddddd")
//   //fireEvent.press(getByTestId(testId))

//   //expect(getByTestId(testIDs.spendProgress)).toBeFalsy()
// })

afterEach(cleanup)
