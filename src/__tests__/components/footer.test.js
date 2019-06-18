import React from 'react';
import rendeder from 'react-test-renderer';
import Footer from '../../components/footer/footer';

describe('Footer', () => {
  it('renders', () => {
    const mountedSimple = shallow(<Footer />);
    expect(mountedSimple.find('footer')).toBeTruthy();
  });

  it('rendering follows the snapshot', () => {
    const snapshot = rendeder.create(<Footer />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
