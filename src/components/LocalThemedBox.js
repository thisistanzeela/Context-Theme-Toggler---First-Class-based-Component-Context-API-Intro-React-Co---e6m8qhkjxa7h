// import React from 'react';


// const LocalThemedBox = () => {

// return(
//     <div style={{width:'200px',height:'200px',border:'2px solid green'}} id="local-themed-box">
//         {/* Write code below this line */}
        
//     </div>
// )
// }

// export { LocalThemedBox }

import React, { useContext, useState } from 'react';
import { ThemeContext } from './ThemeProvider';

const LocalThemedBox = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [localTheme, setLocalTheme] = useState('light');

  const toggleLocalTheme = () => {
    setLocalTheme(localTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div
      style={{ width: '200px', height: '200px', border: '2px solid green' }}
      id="local-themed-box"
      className={localTheme === 'light' ? 'bg-light' : 'bg-dark'}
    >
      <p
        id="local-themed-text-container"
        className={`txt-${theme === 'light' ? localTheme : theme}`}
      >
        Some Text
      </p>
      <button
        className={`btn btn-${theme === 'light' ? localTheme : theme}`}
        id="local-theme-toggler"
        onClick={toggleLocalTheme}
      >
        {localTheme === 'light' ? 'Toggle local theme to dark' : 'Toggle local theme to light'}
      </button>
    </div>
  );
};

export { LocalThemedBox };
