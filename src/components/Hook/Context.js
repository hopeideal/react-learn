import React, { useState, useContext } from 'react';
import ThemeContext, { themes } from '../../lib/ThemeContext';

const Desendants = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme, toggleTheme);

  const toggle = (theme) => {
    console.log('toggle');
    toggleTheme(theme);
  };

  return (
    <>
      <div>
        <button
          onClick={toggle({
            dark: {
              foreground: '#ffffff',
              background: '#222222',
            },
          })}
        >
          Toggle Light
        </button>
        <button
          onClick={toggleTheme({
            light: {
              foreground: '#000000',
              background: '#eeeeee',
            },
          })}
        >
          Toggle Dark
        </button>
      </div>
    </>
  );
};

const Child = () => {
  return <Desendants />;
};

export default () => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = (x) => {
    console.log(x);
    // setTheme(() => x);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Child />
    </ThemeContext.Provider>
  );
};
