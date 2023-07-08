import { createGlobalStyle } from 'styled-components';

import SkyEngWoff from '@/assets/fonts/skyeng.woff';
import SkyEngWoff2 from '@/assets/fonts/skyeng.woff2';

const Global = createGlobalStyle`
@font-face {
    font-family: 'SkyEng';
    src: url(${SkyEngWoff}) format('woff'),
    url(${SkyEngWoff2}) format('woff2');
    font-style: normal;
    font-weight: normal;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    font-family: 'SkyEng', sans-serif;
    font-style: normal;
    font-weight: normal;
}

html {
    height: 100%;
}

body {
    height: 100% ;
}

a {
    text-decoration: none;
    color: #fff
}



#root{
    height: 100%;
   
}
`;

export default Global;
