import { css } from 'styled-components'

const sizes = {
  giant: 1440,
  bigDesktop: 1200,
  desktop: 1000,
  tablet: 768,
  thone: 600,
  phablet: 480,
  phone: 376,
  tiny: 330,
}

/* Iterate through the sizes and create a media query template */
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  /* Use "em" units in breakpoints to work properly cross-browser 
  and support users changing their browsers font-size. */
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

export default media
