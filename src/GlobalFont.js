import { createGlobalStyle } from 'styled-components';

import Trade from './fonts/TradeGothicLTBoldRegular.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'TradeGothicLTBoldRegular';
        src: local('TradeGothicLTBoldRegular'), local('TradeGothicLTBoldRegular'),
        url(${Trade}) format('ttf');
        font-weight: 300;
        font-style: normal;
    }
`;