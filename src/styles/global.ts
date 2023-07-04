import { createGlobalStyle } from 'styled-components'

import InterRegular from '@/assets/fonts/Inter/Inter-Regular.ttf'
import PoppinsLight from '@/assets/fonts/Poppins/Poppins-Light.ttf'
import PoppinsSemiBold from '@/assets/fonts/Poppins/Poppins-SemiBold.ttf'

export default createGlobalStyle`
@font-face {
  font-family: 'PoppinsLight';
  src: url(${PoppinsLight}) format('truetype');
  font-weight: 300;
  font-style: normal;
  font-display: auto;
}
@font-face {
  font-family: 'InterRegular';
  src: url(${InterRegular}) format('truetype');
  font-weigth: 400;
}
@font-face {
  font-family: 'PoppinsSemiBold';
  src: url(${PoppinsSemiBold}) format('truetype');
  font-weigth: 600;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-size: 24px;

    @media (max-width: 540px) {
      font-size: 20px;
    }

    @media (max-width: 320px) {
      font-size: 16px;
    }
  }
body {
  background: #030304;
}
`
