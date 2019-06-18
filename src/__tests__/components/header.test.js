import React from 'react';
import Header from '../../components/header/header';

describe('Header', () => {
  it('renders', () => {
    const mountedSimple = shallow(<Header />);
    expect(mountedSimple.find('header')).toBeTruthy();
  });
});
