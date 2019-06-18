/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

class Footer extends React.Component {
  render() {
    return (
      <footer
        css={css`
          font-size: 12px;
          text-align: center;
        `}
      >
        &copy; 2018 Code Fellows
      </footer>
    );
  }
}

export default Footer;
