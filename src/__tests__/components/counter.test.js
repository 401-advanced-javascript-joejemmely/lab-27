import React from 'react';
import Counter from '../../components/counter/counter';

describe('Counter', () => {
  it('renders', () => {
    const mountedSimple = shallow(<Counter />);
    expect(mountedSimple.find('.counter')).toBeTruthy();
  });

  it('changes state', () => {
    const mountedSimple = mount(<Counter />);
    const buttonDown = mountedSimple.find('.down.clicker');
    const buttonUp = mountedSimple.find('.up.clicker');

    // From 0 to -1
    buttonDown.simulate('click');
    expect(mountedSimple.state('count')).toEqual(-1);

    // From -1 to 0
    buttonUp.simulate('click');
    expect(mountedSimple.state('count')).toEqual(0);

    expect(mountedSimple.find('.count').text()).toContain('0');
  });
});
