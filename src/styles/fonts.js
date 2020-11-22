import { css } from 'styled-components'

/* Regular types */
import FuturaRegularWOFF2 from '@fonts/Futura/FuturaRegular.woff2'
import FuturaMediumWOFF2 from '@fonts/Futura/FuturaMedium.woff2'
import FuturaBoldWOFF2 from '@fonts/Futura/FuturaBold.woff2'
import FuturaBlackWOFF2 from '@fonts/Futura/FuturaBlack.woff2'

/* Monospaced types  */
import JetBrainsMonoRegularWOFF2 from '@fonts/JetBrainsMono/JetBrainsMono-Regular.woff2'
import JetBrainsMonoBoldWOFF2 from '@fonts/JetBrainsMono/JetBrainsMono-Bold.woff2'

/* Highlighting types */
import SrirachaRegularWOFF2 from '@fonts/Sriracha/SrirachaRegular.woff2'

const FontFaces = css`
  @font-face {
    font-family: 'Futura';
    src: url(${FuturaRegularWOFF2}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Futura';
    src: url(${FuturaMediumWOFF2}) format('woff2');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Futura';
    src: url(${FuturaBoldWOFF2}) format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Futura';
    src: url(${FuturaBlackWOFF2}) format('woff2');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'JetBrainsMono';
    src: url(${JetBrainsMonoRegularWOFF2}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'JetBrainsMono';
    src: url(${JetBrainsMonoBoldWOFF2}) format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Sriracha';
    src: url(${SrirachaRegularWOFF2}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }
`

export default FontFaces
