import { createGlobalStyle } from 'styled-components';
import RubikLightWoff from 'assets/fonts/Rubik/Light/Rubik-Light.woff';
import RubikLightWoff2 from 'assets/fonts/Rubik/Light/Rubik-Light.woff2';
import RubikRegularWoff from 'assets/fonts/Rubik/Regular/Rubik-Regular.woff';
import RubikRegularWoff2 from 'assets/fonts/Rubik/Regular/Rubik-Regular.woff2';
import RubikMediumWoff from 'assets/fonts/Rubik/Medium/Rubik-Medium.woff';
import RubikMediumWoff2 from 'assets/fonts/Rubik/Medium/Rubik-Medium.woff2';

const FontStyles = createGlobalStyle`
@font-face {
  font-family: 'Rubik', sans-serif;
  src: url(${RubikLightWoff2}) format('woff2'),
       url(${RubikLightWoff}) format('woff');
  font-weight: 300;
  font-style: normal;
  font-weight: swap;
}

@font-face {
    font-family: 'Rubik', sans-serif;
    src: url(${RubikRegularWoff2}) format('woff2'),
         url(${RubikRegularWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
    font-weight: swap;
}

@font-face {
    font-family: 'Rubik', sans-serif;
    src: url(${RubikMediumWoff2}) format('woff2'),
         url(${RubikMediumWoff}) format('woff');
    font-weight: 500;
    font-style: normal;
    font-weight: swap;
}
`;

export default FontStyles;
