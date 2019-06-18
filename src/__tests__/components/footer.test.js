import React from 'react';
import Footer from '../../components/footer/footer';

describe('Footer', () => {
  it('renders', () => {
    const mountedSimple = shallow(<Footer />);
    expect(mountedSimple.find('footer')).toBeTruthy();
  });
});
