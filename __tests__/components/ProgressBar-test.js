/**
 * @format
 */

import 'react-native';
import React from 'react';
import ProgressBar from '../../src/components/ProgressBar';
import renderer from 'react-test-renderer';
import { AppColors, layouting } from '../../src/utils/constants'
import {windowWidth } from '../../src/utils/utils'


it('renders correctly', () => {
    const tree = renderer
      .create( <ProgressBar
        backgroundColor={AppColors.lightGreenWithOpacity}
        tintColor={AppColors.lightGreen}
        width={windowWidth() - (layouting.spacingFactor * 2)}
        height={15}
        percentage={80}
        borderRadius={8}
    />)
      .toJSON();
    expect(tree).toMatchSnapshot();
});