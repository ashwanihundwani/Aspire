/**
 * @format
 */

import 'react-native';
import React from 'react';
import CurrencyWithAmount from '../../src/components/CurrencyWithAmount';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
      .create(<CurrencyWithAmount amount={"3,000"}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
});