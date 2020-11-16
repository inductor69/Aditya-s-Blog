import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

import mixins from '@styles/mixins'
import media from '@styles/media'

const Main = styled.main`
  justify-content: space-between;
  ${mixins.sidePadding}
  ${mixins.desktopAlignCenter}
  margin-bottom: 120px;
  margin-top: 60px;
  ${media.tablet`
    margin-top: 10vw;
    margin-bottom: 25vw;
  `}
`

const Title = styled.h1`
  font-size: 48px;
  font-weight: 600;
  line-height: 64px;
  ${media.thone`
    font-size: 8vw;
    line-height: 10vw;
  `}
  span {
    display: inline-block;
  }
  .highlight {
    color: var(--color-highlights);
  }
`

export default function HeroBody() {
  return (
    <Main>
      <Fade duration={400}>
        <Title>
        
          <span>Hi there, I'm Aditya,</span>
          <span>UI <span className="highlight">Designer</span> & Full Stack Developer <span className="highlight">Developer</span>.</span>
          <span>I build stuff for the web.</span>
        
        </Title>
      </Fade>
    </Main>
  )
}
