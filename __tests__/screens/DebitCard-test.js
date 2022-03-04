/**
 * @format
 */

import 'react-native';
import React from 'react';
import DebitCard from '../../src/screens/DebitCard';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../src/store'

it('renders correctly', () => {
    const tree = renderer
      .create(<Provider store={store}><DebitCard /></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
});



