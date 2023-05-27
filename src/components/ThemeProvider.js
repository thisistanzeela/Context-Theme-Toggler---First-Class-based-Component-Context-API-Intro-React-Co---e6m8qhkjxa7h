// import React from 'react';

// const ThemeContext = React.createContext()
// const ThemeProvider = (props) =>{

//     return (
//         <React.Fragment>

//         </React.Fragment>
//     )
// }

// export {ThemeProvider,ThemeContext}


import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from './ThemeProvider';
import { Page } from './Page';
import { LocalThemedBox } from './LocalThemedBox';
import { ThemeToggleButton } from './ThemeToggleButton';

describe('ThemeProvider', () => {
  test('All elements initially follow the light theme', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Page />
        <ThemeToggleButton />
        <LocalThemedBox />
      </ThemeProvider>
    );

    expect(getByTestId('themed-page')).toHaveClass('bg-light');
    expect(getByTestId('themed-text-container')).toHaveClass('txt-light');
    expect(getByTestId('themed-button')).toHaveClass('btn-light', 'txt-light');
    expect(getByTestId('local-themed-box')).toHaveClass('bg-light');
    expect(getByTestId('local-themed-text-container')).toHaveClass('txt-light');
    expect(getByTestId('local-theme-toggler')).toHaveClass('btn-light');
    expect(getByTestId('global-theme-toggler')).toHaveClass(
      'btn-light',
      'txt-light'
    );
  });

  test('On clicking the global theme toggle button, all elements change to dark classes', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Page />
        <ThemeToggleButton />
        <LocalThemedBox />
      </ThemeProvider>
    );

    fireEvent.click(getByTestId('global-theme-toggler'));

    expect(getByTestId('themed-page')).toHaveClass('bg-dark');
    expect(getByTestId('themed-text-container')).toHaveClass('txt-dark');
    expect(getByTestId('themed-button')).toHaveClass('btn-dark', 'txt-dark');
    expect(getByTestId('local-themed-box')).toHaveClass('bg-dark');
    expect(getByTestId('local-themed-text-container')).toHaveClass('txt-dark');
    expect(getByTestId('local-theme-toggler')).toHaveClass('btn-dark');
    expect(getByTestId('global-theme-toggler')).toHaveClass(
      'btn-dark',
      'txt-dark'
    );
  });

  test('On clicking the local theme toggler button, only the locally themed box element changes', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Page />
        <ThemeToggleButton />
        <LocalThemedBox />
      </ThemeProvider>
    );

    fireEvent.click(getByTestId('local-theme-toggler'));

    expect(getByTestId('themed-page')).toHaveClass('bg-light');
    expect(getByTestId('themed-text-container')).toHaveClass('txt-light');
    expect(getByTestId('themed-button')).toHaveClass('btn-light', 'txt-light');
    expect(getByTestId('local-themed-box')).toHaveClass('bg-dark');
    expect(getByTestId('local-themed-text-container')).toHaveClass('txt-light');
    expect(getByTestId('local-theme-toggler')).toHaveClass('btn-dark');
    expect(getByTestId('global-theme-toggler')).toHaveClass(
      'btn-light',
      'txt-light'
    );
  });
});
export { ThemeProvider };
