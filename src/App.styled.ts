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
}

html, body {
    height: 100%;
}



#root{
    height: 100%;
   
}
`;

export default Global;
