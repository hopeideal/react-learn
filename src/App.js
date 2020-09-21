import React from 'react';
import Parent from './components/TestContext/Parent';
import Context from './components/TestContext/context';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: 'hh',
      toggleTheme: this.toggleTheme,
    };
  }

  toggleTheme = (theme) => {
    this.setState({
      theme,
    });
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        <Parent />
      </Context.Provider>
    );
  }
}
