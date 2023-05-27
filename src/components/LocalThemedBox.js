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
  const { theme } = useContext(ThemeContext);
  const [localTheme, setLocalTheme] = useState('light');

  const toggleLocalTheme = () => {
    setLocalTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div
      style={{ width: '200px', height: '200px', border: '2px solid green' }}
      className={`bg-${localTheme}`}
      id="local-themed-box"
    >
      <p
        className={`txt-${theme}`}
        id="local-themed-text-container"
      >
        Some Text
      </p>
      <button
        className={`btn btn-${theme}`}
        onClick={toggleLocalTheme}
        id="local-theme-toggler"
      >
        {localTheme === 'light'
          ? 'Toggle local theme to dark'
          : 'Toggle local theme to light'}
      </button>
    </div>
  );
};


export { LocalThemedBox };
