import React from 'react'
import styled from 'styled-components'

import SEO from '@components/Seo'
import { Link as GatsbyLink } from 'gatsby'

import mixins from '@styles/mixins'
import media from '@styles/media'

const Main = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  ${mixins.sidePadding}
  ${mixins.desktopAlignCenter}
`
const NotFoundTitle = styled.h1 `
  font-size: 136px;
  font-weight: 700;
  ${media.tablet`font-size: 48px;`}
`
const NotFoundDescription = styled.p `
  font-size: 48px;
  padding-bottom: 64px;
  max-width: 600px;
  ${media.tablet`font-size: 24px;`}
`
const MainPageRedirect = styled(props => <GatsbyLink {...props} />)`
  font-size: 32px;
  font-weight: 700;
  color: var(--color-highlights);
  display: inline-block;
  top: 2px;
  position: relative;
  overflow: hidden;
  transition: all ease-in-out 0.1s;
  text-decoration: none;
  ${media.tablet`font-size: 24px;`}
`

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <SEO title="Oops, where are we? - Ernesto Resende" />
        <Main>
          <NotFoundTitle>Not Found</NotFoundTitle>
          <NotFoundDescription>Sorry, we can't find the page you're looking for :(</NotFoundDescription>
          <MainPageRedirect to="/">Back to the Homepage</MainPageRedirect>
          
        </Main>
    </React.Fragment>
  )
}

export default NotFoundPage
