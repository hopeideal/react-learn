import React from 'react';
import Context from './context';

export default class Grandson extends React.Component {
  render() {
    return (
      <>
        <Context.Consumer>
          {({ theme, toggleTheme }) => (
            <>
              <div>this is sunzi. {theme}</div>
              <a onClick={() => toggleTheme('gogo')}>Click me</a>
            </>
          )}
        </Context.Consumer>
      </>
    );
  }
}
