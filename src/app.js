import React from 'react';

import { Global, css } from '@emotion/core';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Counter from './components/counter/counter';

/**
 * App component
 */
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Global
          styles={css`
            html {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
                Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            }
            body {
              background-color: hsl(0, 0%, 98%);
            }
          `}
        />
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
