/**
 * @format
 */

import 'react-native';
import React from 'react';
import WeeklySpendingLimit from '../../src/screens/WeeklySpendingLimit';
import renderer from 'react-test-renderer';
import store from '../../src/store';
import { Provider } from 'react-redux';

it('renders correctly', () => {
    const tree = renderer
      .create(<Provider store={store}><WeeklySpendingLimit /></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
});