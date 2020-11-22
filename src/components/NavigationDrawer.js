import React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

import media from '@styles/media'

const DrawerWrapper = styled.div`
  align-items: center;
  background-color: var(--color-navBackground);
  border-color: var(--color-scrollbar);
  border-top-style: solid;
  border-top-width: 1px;
  bottom: 0rem;
  box-shadow: var(color-cardsBoxShadow);
  display: none;
  justify-content: space-around;
  left: 0rem;
  position: sticky;
  right: 0rem;
  z-index: 5;
  ${media.tablet`display:flex;`}
`
const StyledLink = styled(props => <GatsbyLink {...props} />)`
  align-items: center;
  padding: 10px 0 10px 0;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  font-size: 0.875rem;
  line-height: 1;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  text-align: center;
  text-decoration: none;
  .iconify {
    color: var(--color-text);
    width: 2.5rem;
    height: 2.5rem;
    padding-bottom: 5px;
  }
`
const StyledLinkCaption = styled.div`
  font-size: 13px;
  color: var(--color-secondaryText);
`

const NavigationDrawer = () => {
  return (
    <DrawerWrapper>

      <StyledLink to='/about'>
        <span
          className='iconify'
          data-icon='mdi:emoticon-happy'
          data-inline='false'
        ></span>
        <StyledLinkCaption>About</StyledLinkCaption>
      </StyledLink>

      <StyledLink to='/blog'>
        <span
          className='iconify'
          data-icon='bx:bxs-pencil'
          data-inline='false'
        ></span>
        <StyledLinkCaption>Blog</StyledLinkCaption>
      </StyledLink>

      <StyledLink to='/#connect'>
        <span
          className='iconify'
          data-icon='bi:person-fill'
          data-inline='false'
        ></span>
        <StyledLinkCaption>Connect</StyledLinkCaption>
      </StyledLink>
    </DrawerWrapper>
  )
}

export default NavigationDrawer
