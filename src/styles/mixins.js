import { css } from 'styled-components'
//import theme from '@styles/theme';
import media from '@styles/media'
//const { colors, zIndex } = theme;

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexLeft: css`
    display: flex;
    justify-content: left;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  desktopAlignCenter: css`
    margin: 0 auto;
    width: 100%;
    right: 0px;
    left: 0px;
    max-width: 1100px;
  `,

  sidePadding: css`
    padding-left: 50px;
    padding-right: 50px;
    ${media.phablet`padding-left: 15px; padding-right: 15px;`};
  `,

  styledLink: css`
    color: var(--color-highlights);
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    overflow: hidden;
    &:before {
      content: '';
      position: absolute;
      left: 51%;
      right: 51%;
      bottom: 0;
      background: var(--color-highlights);
      height: 2px;
      -webkit-transition-property: left, right;
      transition-property: left, right;
      -webkit-transition-duration: 0.2s;
      transition-duration: 0.2s;
      -webkit-transition-timing-function: ease-out;
      transition-timing-function: ease-out;
    }
    &:hover:before {
      left: 0;
      right: 0;
    }
    &:focus:before {
      left: 0;
      right: 0;
    }
    &:active:before {
      left: 0;
      right: 0;
    }
    @media (max-width: 500px) {
      font-size: 16px;
    }
  `,
}

export default mixins
