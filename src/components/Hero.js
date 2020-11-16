import React from 'react'
import styled from 'styled-components'
import HeroBody from '@components/HeroBody'

import HeroMask from '@icons/HeroMask'

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  z-index: 9;
`
const BlockModule = styled.div`
  background: var(--color-gradients);
  position: relative;
`

const HeroMaskWrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  overflow: hidden;
  z-index: 10;
  bottom: 43px;
`

const Hero = () => {
  return (
    <MainContainer>
      {/* Main Wrapper for the text */}
      <BlockModule>
        <HeroBody />
      </BlockModule>

      {/* Wave mask from the hero component */}
      <HeroMaskWrapper>
        <HeroMask />
      </HeroMaskWrapper>
    </MainContainer>
  )
}

export default Hero
