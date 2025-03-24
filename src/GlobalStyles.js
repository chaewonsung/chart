import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { media, rem } from './lib/styles/variables';

const GlobalStyles = createGlobalStyle`
  ${reset}

  button {
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font: inherit;
  text-align: left;
}
a {
  color: inherit;
  text-decoration: none;
}
input {
  border: none;
  outline: none;
  font: inherit;
  font-size: 1rem;
  padding: 0;
  margin: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  min-width: 0px;
  font-size: inherit;
  &::placeholder {
    color: inherit;
  }
}
input[type='number'] {
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  -moz-appearance: textfield;
}

:root {
  --pink-00: #FF82AC;
  --pink-01: #FE5C73;
  --pink-02: #FF4B4A;
  --pink-03: #FA00FF;
  
  --orange-00: #FFF5D9;
  --orange-01: #FFBB38;
  --orange-02: #FCAA0B;
  --orange-03: #FC7900;

  --green-00: #DCFAF8;
  --green-01: #41D4A8;
  --green-02: #16dbaa;

  --blue-00: #F5F7FA;
  --blue-01: #E6EFF5;
  --blue-02: #EDF1F7;
  --blue-03: #E7EDFF;
  --blue-04: #DFE5EE;
  --blue-05: #8BA3CB;
  --blue-06: #718EBF;
  --blue-07: #396AFF;
  --blue-08: #2D60FF;
  --blue-09: #1814F3;
  --blue-10: #1A16F3;
  --blue-11: #343C6A;


  --gray-00: #F3F3F5;
  --gray-01: #B1B1B1;
  --gray-02: #232323;

  --primary-yellow: #FEAA09;
  --primary-navy: #343C6A;
  --primary-blue: #2D60FF;
  --secondary-pink: #FE5C73;
  --text-blue: var(--blue-06);

  --sidebar-width: ${rem(250)};
  --header-height: 10.1rem;
  --main-padding: 4rem;

  --secondary-font: "Lato", sans-serif;

  --gap-icon: 2rem;
  
  ${media.large} {
    --sidebar-width: ${rem(230)};
    --header-height: 8.5rem;
    --main-padding: 2.5rem;
    --gap-icon: 1.2rem;
  }
  ${media.midLarge} {
    --header-height: 15.5rem;
  }
  ${media.medium} {
    --header-height: 14rem;
  }
}
*{
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}
body {
  font-size: 1.6rem;
}
html, body {
  height: 100%;
  margin: 0;
}
body {
  font-family: "Inter", sans-serif;
  color: var(--primary-navy);
}
`;

export default GlobalStyles;
