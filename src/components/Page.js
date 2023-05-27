// import React from 'react';
// import { LocalThemedBox } from './LocalThemedBox';
// import { ThemeContext } from './ThemeProvider';

// const Page = () => {

//     return(
//         <div className={"container"} id="themed-page">
//             <p id="themed-text-container">
//                 lorem ipsum dolor iterit n stuff
//             </p>
//             <button className="btn" id="themed-button">Themed Button</button>
//             <LocalThemedBox />
//         </div>
//     )
// }

// export { Page }
import React, { useContext } from 'react';
import { LocalThemedBox } from './LocalThemedBox';
import { ThemeContext } from './ThemeProvider';

const Page = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`container bg-${theme}`} id="themed-page">
      <p className={`txt-${theme}`} id="themed-text-container">
        lorem ipsum dolor iterit n stuff
      </p>
      <button className={`btn btn-${theme} txt-${theme}`} id="themed-button">
        Themed Button
      </button>
      <LocalThemedBox />
    </div>
  );
};

export { Page };
