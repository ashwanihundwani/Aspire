/**
 * @format
 */

import 'react-native';
import React from 'react';
import DebitCardOption from '../../src/components/DebitCardOption';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
      .create(<DebitCardOption 
                title={"Test"} 
                index={0} 
                description={"Test Description"} 
                onClick={()=> {}}
                showSwitch={true}
                icon={{}} 
                id={"1"}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });