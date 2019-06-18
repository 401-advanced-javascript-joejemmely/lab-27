/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

/**
 * Footer component
 */
class Footer extends React.Component {
  render() {
    return (
      <footer
        css={css`
          font-size: 12px;
          text-align: center;
        `}
      >
        &copy; 2019 Code Fellows
      </footer>
    );
  }
}

export default Footer;
