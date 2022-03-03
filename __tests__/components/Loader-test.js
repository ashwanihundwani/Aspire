/**
 * @format
 */

import 'react-native';
import React from 'react';
import Loader from '../../src/components/Loader';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
      .create(<Loader isLoading={true} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
});