import React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'
import Fade from 'react-reveal/Fade';

import DarkToggle from '@components/DarkToggle'

import theme from '@styles/theme'
import mixins from '@styles/mixins'
import media from '@styles/media'
const { fontSizes } = theme


const Main = styled.div`
  background-color: var(--color-navBackground);
  margin: 0 auto;
  top: 0;
  z-index: 15;
  width: 100%;
`
const NameContainer = styled(props => <GatsbyLink {...props} />)`
  color: var(--color-highlights);
  text-decoration: none;
  padding-right: 64px;
  font-size: 20px;
  letter-spacing: -0.1rem;
  ${media.tablet`font-size: 18px;`}
`
const Nav = styled.nav`
  ${mixins.desktopAlignCenter}
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 85px;
  ${mixins.sidePadding}
  ${media.tablet`min-height: 65px;`}
`
const LeftBlock = styled.div`
  display: flex;
  flex-direction: row;
`
const NavList = styled.ul`
  display: flex;
  list-style: none;
  ${media.tablet`display:none;`}
`
const StyledLink = styled(props => <GatsbyLink {...props} />)`
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 0 25px;
  color: var(--color-text);
  display: inline-block;
  top: 2px;
  position: relative;
  overflow: hidden;
  transition: all ease-in-out 0.1s;
  text-decoration: none;

  :hover {
    color: var(--color-highlights);
  }
  ${media.desktop`margin: 0 25px 0 0;`};
  ${media.tablet`
    font-size: ${fontSizes.xxs};
    margin: 0 25px 0 0;
  `};
`
const Bold = styled.span`
  font-weight: 700;
`

class Navigation extends React.Component {
  render() {
    return (
      <Main>
        <Nav>

        <Fade delay={400} duration={500}>
          <LeftBlock>
            <NameContainer to='/'>
              Aditya<Bold> K.</Bold>
            </NameContainer>
            <NavList>
              <StyledLink to='/blog'>Blog</StyledLink>
              <StyledLink to='/about'>About</StyledLink>
              <StyledLink to='/#connect'>Connect</StyledLink>
            </NavList>
          </LeftBlock>
        </Fade>

          <Fade delay={600} duration={500}>
            <DarkToggle/>
          </Fade>
          
        </Nav>
      </Main>
    )
  }
}


export default Navigation
