import React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

import FooterMask from '@icons/FooterMask'

import theme from '@styles/theme'
import mixins from '@styles/mixins'
import media from '@styles/media'
const { fontSizes } = theme

const MainContainer = styled.div`
  margin-top: 36px;
  height: 300px;
  background: var(--color-footer);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const FooterWrapper = styled.div`
  ${mixins.sidePadding}
  ${mixins.desktopAlignCenter}
  padding-bottom: 30px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 36px;
  ${media.phablet`padding: 0 25px 36px 25px;`};
`
const HeroMaskWrapper = styled.div`
  display: block;
  width: 100%;
  overflow: hidden;
  z-index: 3;
`

const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 36px;
`
const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
`

const NameContainer = styled(props => <GatsbyLink {...props} />)`
  color: var(--color-highlights);
  text-decoration: none;
  padding-bottom: 20px;
  letter-spacing: -0.1rem;
`
const Bold = styled.span`
  font-weight: 700;
`
const Copyright = styled.p`
  font-size: 15px;
  color: var(--color-secondaryText);
`
const StyledLink = styled(props => <GatsbyLink {...props} />)`
  font-size: ${fontSizes.xs};
  font-weight: 400;
  color: var(--color-text);
  display: inline-block;
  position: relative;
  overflow: hidden;
  transition: all ease-in-out 0.1s;
  text-decoration: none;
  padding-bottom: 10px;
  :hover {
    color: var(--color-highlights);
  }
  ${media.desktop`margin: 0 25px 0 0;`};
  ${media.tablet`
    font-size: ${fontSizes.xxs};
    margin: 0 25px 0 0;
  `};
`

const Footer = () => {
  return (
    <MainContainer>
      <HeroMaskWrapper>
        <FooterMask />
      </HeroMaskWrapper>
      <FooterWrapper>
        <FooterLeft>
          <NameContainer to='/'>
            Aditya<Bold> K.</Bold>
          </NameContainer>
          <Copyright>
            © 2020 - Built by Aditya K. All rights reserved.
          </Copyright>
        </FooterLeft>
        <FooterRight>
          <StyledLink to='/blog'>Blog</StyledLink>
          <StyledLink to='/about'>About</StyledLink>
          <StyledLink to='/connect'>Connect</StyledLink>
        </FooterRight>
      </FooterWrapper>
    </MainContainer>
  )
}

export default Footer
