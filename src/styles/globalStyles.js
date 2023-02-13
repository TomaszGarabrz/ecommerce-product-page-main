import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;600&display=swap');

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Kumbh Sans', sans-serif;
    font-size: 16px;
  }
`;

export const colors = {
  orange: 'hsl(26, 100%, 55%)',
  graylishBlue: 'hsl(220, 14%, 75%)',
  paleOrange: 'hsl(25, 100%, 94%)',
  lightgraylishBlue: 'hsl(223, 64%, 98%)',
};

//MOBILE//

const sizes = {
  sizeMobile: '575px',
};

export const devices = {
  mobile: `(max-width: ${sizes.sizeMobile})`,
};
