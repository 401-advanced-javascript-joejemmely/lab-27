import React from 'react';
import rendeder from 'react-test-renderer';
import Header from '../../components/header/header';

describe('Header', () => {
  it('renders', () => {
    const mountedSimple = shallow(<Header />);
    expect(mountedSimple.find('header')).toBeTruthy();
  });

  it('rendering follows the snapshot', () => {
    const snapshot = rendeder.create(<Header />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
