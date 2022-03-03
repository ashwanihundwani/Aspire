/**
 * @format
 */

import 'react-native';
import React from 'react';
import AmountButton from '../../src/components/AmountButton';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
      .create(<AmountButton amount={"3,000"} onClick={()=> {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
});