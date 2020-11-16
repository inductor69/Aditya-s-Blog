export const COLORS = {
  /* Typography, highlight and links */
  text: {
    light: 'rgb(33, 35, 44)', // Near black with a tone of blue.
    dark: 'rgba(255, 255, 255, 0.95)', // White with a bit of transparency
  },
  secondaryText: {
    light: 'rgb(63, 72, 82)', // Dark gray with a light blue tone.
    dark: 'rgb(159, 179, 199)', // Light gray with a light blue tone.
  },
  highlights: {
    light: 'rgb(51, 82, 239)', 
    // Dark Blue/Purple in contrast with the white background.
    dark: 'rgb(245, 55, 106)', 
    // Light saturated pink in contrast with the dark background.
  },
  titleHighlights: {
    light: 'rgb(51, 82, 239)', 
    // Dark Blue/Purple in contrast with the white background.
    dark: 'rgb(255, 232, 60)', 
    // Light saturated yellow in contrast with the dark background.
  },
  sectionTitleHighlights: {
    light: 'rgb(51, 82, 239)',
    dark: 'rgb(51, 82, 239)',
  },
  cardUnderline: {
    light: 'rgb(255, 232, 60)',
    dark: 'rgb(51, 82, 239)',
  },

  /* Background for page and page components (cards, heros, navigation, etc.) */
  background: {
    light: 'rgb(247, 247, 247)', // Very bright tone of gray.
    dark: 'rgb(14, 20, 27)', // Very dark tone of blue.
  },
  gradients: {
    light: 'rgb(225, 241, 250)',
    dark: 'rgb(18, 26, 36)',
  },
  cards: {
    light: 'rgba(191, 222, 242, 0.50)', // Same color as Light Mode Typography.
    dark: 'rgb(18, 26, 36)', // One tone brighter then dark mode background.
  },
  workCards: {
    light: 'rgba(255, 255, 255)', // Same color as Light Mode Typography.
    dark: 'rgb(24, 34, 46)', // One tone brighter then dark mode background.
  },
  cardsBoxShadow: {
    light: '0px 0px 25px rgba(153, 153, 153, 0.3)', // Same color as Light Mode Typography.
    dark: '0px 0px 30px rgba(0, 0, 0, 0.1)', // One tone brighter then dark mode background.
  },
  cardsBoxShadowHover: {
    light: '0px 0px 50px rgba(153, 153, 153, 0.5)', // Same color as Light Mode Typography.
    dark: '0px 0px 50px rgba(0, 0, 0, 0.7)', // One tone brighter then dark mode background.
  },
  projectImageShadow: {
    light: '0px 5px 15px rgba(153, 153, 153, 1)', // Same color as Light Mode Typography.
    dark: '0px 5px 15px rgba(0, 0, 0, 1)', // One tone brighter then dark mode background.
  },
  formControlBoxShadow: {
    light: '0px 0px 10px rgba(153, 153, 153, 0.5)', // Same color as Light Mode Typography.
    dark: '0px 0px 10px rgba(0, 0, 0, 0.3)', // One tone brighter then dark mode background.
  },
  footer: {
    light: 'rgb(225, 241, 250)',
    dark: 'rgb(18, 26, 36)',
  },
  navBackground: {
    light: 'rgb(225, 241, 250)',
    dark: 'rgb(18, 26, 36)',
  },
  toggleBorder: {
    light: 'rgb(33, 35, 44)',
    dark: '#e4e7ec',
  },
  informationCardHighlight: {
    light: 'rgb(51, 82, 239)',
    dark: 'rgb(51, 82, 239)',
  },
  warningCardHighlight: {
    light: 'rgb(255, 157, 0)',
    dark: 'rgb(255, 157, 0)',
  },
  warningCardBackground: {
    light: 'rgb(255, 238, 178)',
    dark: 'rgba(255, 170, 0, 0.15)',
  },
  sucessCardHighlight: {
    light: 'rgb(0, 204, 136)',
    dark: 'rgb(0, 204, 136)',
  },
  sucessCardBackground: {
    light: 'rgba(0, 204, 136, 0.1)',
    dark: 'rgba(0, 204, 136, 0.1)',
  },

  /* Custom scrollbar colors */
  scrollbar: {
    light: 'rgba(191, 222, 242, 0.50)',
    dark: 'rgb(63, 72, 82)',
  },
  scrollbarTrack: {
    light: 'rgba(191, 222, 242, 0.50)',
    dark: 'rgb(63, 72, 82)',
  },
  scrollbarThumb: {
    light: 'rgb(90, 90, 90)',
    dark: 'rgb(159, 179, 199)',
  },
  scrollbarThumbHover: {
    light: 'rgba(191, 222, 242, 0.50)',
    dark: 'rgb(159, 150, 199)',
  },

  /* Custom Prism.js theme colors */
  syntaxBackground: {
    light: 'rgba(237, 237, 237, 0.5)', // Same color as Light Mode Typography.
    dark: 'rgb(24, 34, 47)', // One tone brighter then dark mode background.
  },
  syntaxComment: {
    light: '#467790',
    dark: '#6c8998',
  },
  syntaxProp: {
    light: '#da0079',
    dark: '#FF39A8',
  },
  syntaxBool: {
    light: '#bf00b8',
    dark: '#FFD600',
  },
  syntaxValue: {
    light: '#78909C',
    dark: '#61747D',
  },
  syntaxString: {
    light: '#651fff',
    dark: 'rgb(155, 109, 255)',
  },
  syntaxName: {
    light: '#AA00FF',
    dark: '#C653FF',
  },
  syntaxDel: {
    light: 'rgb(255, 85, 85)',
    dark: '##FF5555',
  },
  syntaxRegex: {
    light: '#3600d6',
    dark: '#ffd700',
  },
}

export const COLOR_MODE_KEY = 'color-mode'
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode'
