/**
 * @format
 */

import 'react-native';
import React from 'react';
import SpendLimitProgress from '../../src/components/SpendLimitProgress';
import renderer from 'react-test-renderer';
import { AppColors, layouting } from '../../src/utils/constants'
import {windowWidth } from '../../src/utils/utils'


it('renders correctly', () => {
    const tree = renderer
      .create( <SpendLimitProgress spent={"3,000"} limit={"5,000"} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
});