import React from 'react';
import Counter from '../../components/counter/counter';

describe('Counter', () => {
  it('renders', () => {
    const mountedSimple = shallow(<Counter />);
    expect(mountedSimple.find('.counter')).toBeTruthy();
  });

  it('increment state', () => {
    const mountedSimple = mount(<Counter />);
    const buttonUp = mountedSimple.find('.up.clicker').at(0);

    buttonUp.simulate('click');
    expect(mountedSimple.state('count')).toEqual(1);
  });

  it('decrement state', () => {
    const mountedSimple = mount(<Counter />);
    const buttonDown = mountedSimple.find('.down.clicker').at(0);

    buttonDown.simulate('click');
    expect(mountedSimple.state('count')).toEqual(-1);
  });
});
