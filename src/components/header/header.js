/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1
          css={css`
            text-transform: uppercase;
            font-weight: 200;
            font-size: 24px;
            text-align: center;
          `}
        >
          Counters R Fun
        </h1>
      </header>
    );
  }
}

export default Header;
