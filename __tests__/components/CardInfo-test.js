/**
 * @format
 */

import 'react-native';
import React from 'react';
import CardInfo from '../../src/components/CardInfo';
import renderer from 'react-test-renderer';
import { render, fireEvent, cleanup} from '@testing-library/react-native'
import { testIDs, DebitCardString } from '../../src/utils/constants';

it('renders correctly', () => {
    const tree = renderer
      .create(<CardInfo 
          holderName={"Ashwani"} 
          cardNumber="5000-7808-5006-2020" 
          expiry="12/22" 
          CVV="500"
          weeklySpentLimit="5,000"
          amountSpent="3,000"
          showProgress={true}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
});

it("shows/hides cvv on show/hide button click", () => {
  const { getByTestId, getByText, getAllByText } = render(<CardInfo 
    holderName={"Ashwani"} 
    cardNumber="5000-7808-5006-2020" 
    expiry="12/22" 
    CVV="500"
    weeklySpentLimit="5,000"
    amountSpent="3,000"
    showProgress={true}/>)

  // Check if Card Number & CVV hides
  fireEvent.press(getByTestId(testIDs.showHideButton))
  const { hiddenCVV, dotString } = DebitCardString.cardInfo
  getByText(hiddenCVV)
  getByText("2020")
  
  expect(getAllByText(dotString).length).toBe(3)

  // Check if Card Number & CVV shows up 
  fireEvent.press(getByTestId(testIDs.showHideButton))
  getByText("500") //cvv
  getByText("5000")
  getByText("7808")
  getByText("5006")
  getByText("2020")
})

afterAll(cleanup)

