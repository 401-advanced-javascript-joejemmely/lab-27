/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

/**
 * Counter component
 */
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleUp = () => {
    const count = this.state.count + 1;
    this.updateCounter(count);
  };

  handleDown = () => {
    const count = this.state.count - 1;
    this.updateCounter(count);
  };

  updateCounter(count) {
    let polarity = '';
    if (count > 0) {
      polarity = 'positive';
    } else if (count < 0) {
      polarity = 'negative';
    }
    this.setState({ count, polarity });
  }

  render() {
    const classes = ['count', this.state.polarity].join(' ');
    return (
      <section
        className="counter"
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 24px;

          a.clicker {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: hsl(0, 0%, 94%);
            height: 30px;
            width: 30px;
            border-radius: 50%;
            text-decoration: none;
            transition: all 0.2s ease-in-out;

            &:hover {
              background-color: hsl(0, 0%, 92%);
              transform: scale(1.1);
            }
          }
        `}
      >
        <a
          href="#"
          className="down clicker"
          onClick={this.handleDown}
          css={css`
            color: blue;
          `}
        >
          -
        </a>
        <span
          className={classes}
          css={css`
            font-size: 64px;
            width: 120px;
            text-align: center;

            &.negative {
              color: blue;
            }
            &.positive {
              color: red;
            }
          `}
        >
          {this.state.count}
        </span>
        <a
          href="#"
          className="up clicker"
          onClick={this.handleUp}
          css={css`
            color: red;
          `}
        >
          +
        </a>
      </section>
    );
  }
}

export default Counter;
