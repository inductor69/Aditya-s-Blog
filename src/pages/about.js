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
      <SEO title="About Me - Ernesto Resende" />
      <Layout>
        <SmallHero />
        <Main>
          <div>
          <SectionCard 
            title="About Me"
            pathname="/about"
          />
          <AboutText>
            <p>Hello, I'm Ernesto Resende, a UI Designer and Front-End Developer based on Brazil.</p>
            <p>I enjoy working with and contributing to stuff that lives on the web, be it by designing or developing it. Presentational content, web-apps, stores or weird conceptual projects, it doesn't matter. If it lives in the web, I'm interested on building it.</p>
            <p>I'm currently majoring in Graphic Design at the <a href="http://en.ufs.br/pagina/21114">Federal University of Sergipe</a>, and take some freelance work on my spare time, while also trying to learn new stuff that adds value to both to my coding skills and industry awareness.</p>
            <p className="last-line">When I'm not busy with work, I'm all about playing some RPGs or reading some novels (I'm a big fan of all sorts of medieval fantasy stuff and weird sci-fi stuff). I'm not so keen at sports, but I'm trying to take long walks more frequently to keep my health and mind in a good place.</p>
            <WhatNext to='/#connect'>What's next?</WhatNext>

          </AboutText>
          </div>

          <div>
            <ImageContainer>
              <img src="https://res.cloudinary.com/ernestoresende/image/upload/v1598847957/work/about_me_picture_bkosm1.jpeg" alt="Myself"/>
            </ImageContainer>
          </div>

        </Main>      
      </Layout>
    </React.Fragment>
  )
}

export default About
