import React from 'react'
import styled from 'styled-components'

const HeroNavigationWrapper = styled.p`
  color: var(--color-secondaryText);
`

const HeroNavigation = props => {
  return <HeroNavigationWrapper>{props.children}</HeroNavigationWrapper>
}

export default HeroNavigation
