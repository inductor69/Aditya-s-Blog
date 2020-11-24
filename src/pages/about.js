import React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

import Layout from '@components/Layout'
import SEO from '@components/Seo'
import SmallHero from '@components/SmallHero'
import SectionCard from '@components/SectionCard'

import mixins from '@styles/mixins'
import media from '@styles/media'

const Main = styled.div `
  ${mixins.desktopAlignCenter}
  ${mixins.sidePadding}
  position: relative;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
      "text area"
      "image area";
  padding-top: 64px;
  gap: 64px 96px;
  ${media.tablet`display: block;`}
`
const AboutText = styled.div `
  padding-bottom: 64px;
  
  a {
    ${mixins.styledLink}  
  }
  p {
    padding-bottom: 20px;
    line-height: 1.5;
  }
  .last-line {
    padding-bottom: 36px;
  }
`
const WhatNext = styled(props => <GatsbyLink {...props} />)`
  ${mixins.styledLink}
  font-size: 22px;
  ${media.tablet`font-size: 22px;`}
`
const ImageContainer = styled.div `
  img {
    margin-top: 156px;
    ${media.tablet`
      margin: 0 auto;
      width: 300px;  
    `}
    border-radius: 2px;
    box-shadow: 5px 5px var(--color-cardUnderline);
  }
`

const About = () => {
  return(
    <React.Fragment>
      <SEO title="About Me - Aditya K." />
      <Layout>
        <SmallHero />
        <Main>
          <div>
          <SectionCard 
            title="About Me"
            pathname="/about"
          />
          <AboutText>
            <p>Hello, I'm Aditya K., a UI Designer and Full-Stack Developer.</p>
            <p>I'm Sophomore at IIT Delhi pursuing a Major degree in Production and Industrial Engineering in the Mechanical department.</p>
            <p>My main tech stack is Native Android Development, Flutter Framework, TypeScript, NodeJS, MongoDB, Firebase, GraphQL, and ReactJS.
I'm in the early days of my journey to become a successful entrepreneur and Java and Python are my go-to for building everything, but I really like JS and it dominates most of my daily work now.</p>
            <WhatNext to='/#connect'>What's next?</WhatNext>

          </AboutText>
          </div>

          <div>
            <ImageContainer>
              <img src="https:///res-console.cloudinary.com/inductor/thumbnails/transform/v1/image/upload//v1606114396/SU1HXzAyNjNfc254dG45/drilldown" alt="Me"/>
            </ImageContainer>
          </div>

        </Main>      
      </Layout>
    </React.Fragment>
  )
}

export default About
