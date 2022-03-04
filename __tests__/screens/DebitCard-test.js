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

it('renders correctly', () => {
    const tree = renderer
      .create(<Provider store={store}><DebitCard /></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
});

afterEach(cleanup)
