import React from 'react'
import styled from 'styled-components'

import SectionCard from '@components/SectionCard'
import WorkCard from '@components/WorkCard'

import { Link as GatsbyLink, navigate } from 'gatsby'

import mixins from '@styles/mixins'
import media from '@styles/media'

const Main = styled.div`
  ${mixins.desktopAlignCenter}
  ${mixins.sidePadding}
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas: 'main-area' 'side-area';
  gap: 64px 64px;
  ${media.desktop`display: block`}
`
const ProjectsHeader = styled.div`
  padding-top: 20px;
  ${mixins.desktopAlignCenter}
  ${mixins.sidePadding}
`
const ProjectsGrid = styled.div`
  ${mixins.desktopAlignCenter}
  ${mixins.sidePadding}
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  gap: 32px;
  padding-bottom: 128px;
`
const Recent = styled.h2`
  font-size: 18px;
  font-weight: 600;
  padding: 30px 0 50px;
  color: var(--color-highlights);
`
const Newsletter = styled.div`
  h2 {
    font-size: 18px;
    font-weight: 600;
    padding: 30px 0 0;
    color: var(--color-highlights);
  }
  p {
    color: var(--color-secondaryText);
    margin-top: 28px;
    font-size: 16px;
    margin-bottom: 28px;
    line-height: 1.6;
  }
  button {
    box-sizing: border-box;
    appearance: none;
    background-color: transparent;
    border: 2px solid var(--color-highlights);
    border-radius: 0.6em;
    color: var(--color-highlights);
    cursor: pointer;
    display: flex;
    align-self: center;
    font-size: 18px;
    font-weight: 600;
    line-height: 1;
    padding: 0.8em 2.5em;
    text-decoration: none;
    text-align: center;
    transition: box-shadow 100ms ease-in-out, color 100ms ease-in-out;

    &:hover {
      box-shadow: 0 0 40px 40px var(--color-highlights) inset;
      color: #fff;
    }
  }
`
const Archive = styled(props => <GatsbyLink {...props} />)`
  ${mixins.styledLink}
`
const ContactSection = styled.div`
  ${mixins.desktopAlignCenter}
  ${mixins.sidePadding}
  text-align: center;
  padding-top: 100px;
  max-width: 800px;
`
const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const StyledIcon = styled.a`
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
    width: 5rem;
    height: 5rem;
    padding-right: 20px;
  }
`

const HomeGrid = ({ children }) => {

  function openNewsletter() {
    navigate('/newsletter')
  }

  return (
    <React.Fragment>
      <Main>
        <div>
          <Recent>RECENTLY PUBLISHED</Recent>

          {children}

          <Archive to='/blog'>See all Blog Posts</Archive>
        </div>

        <Newsletter>
          <h2>NEWSLETTER</h2>
          <p>Get updated on design and front-end content as soon as they come out. No spamming, no compromisses. Unsubscribe at any time.</p>
          <button onClick={openNewsletter}>Join the Newsletter</button>
        </Newsletter>


      </Main>

      <ProjectsHeader>
        <SectionCard
          title='Case Studies'
          description="Some of the previous and ongoing work that I'm proud of."
        />
      </ProjectsHeader>
      <ProjectsGrid>
        <WorkCard
          thumbnail='https://res.cloudinary.com/ernestoresende/image/upload/v1604017158/work/SOWI_Cover_yvhybp.jpg'
          title='SOWI'
          description="A content production collective to discusses the culture of entertainment in it's many formats."
          projectLink='VIEW THE CASE STUDY >'
          href='/sowi'
        />

        {/* <WorkCard
          thumbnail='https://res.cloudinary.com/ernestoresende/image/upload/v1604017328/work/Oracao_Play_Cover_i2cogh.jpg'
          title='Oração Play'
          description='A praying and meditation mobile app available for Android and iOS users.'
          projectLink='VIEW THE CASE STUDY >'
          href='/oracao-play'
        /> */}
      </ProjectsGrid>

      <ContactSection id='connect'>
        <SectionCard
          title='Hey there!'
          description="Feel free to reach out whether you are looking for a designer and/or developer for your next project, have a question, or just want to say connect."
        >
          <SocialWrapper>
            <StyledIcon
              href='https://www.linkedin.com/in/aditya-kumar-b99b1519b/'
              target='_blank'
              rel='nofollow noopener noreferer'
            >
              <span
                className='iconify'
                data-icon='ant-design:linkedin-filled'
                data-inline='false'
              ></span>
            </StyledIcon>
            <StyledIcon
              href='https://github.com/inductor69'
              target='_blank'
              rel='nofollow noopener noreferer'
            >
              <span
                className='iconify'
                data-icon='ant-design:github-filled'
                data-inline='false'
              ></span>
            </StyledIcon>
            
            <StyledIcon
              href='https://twitter.com/Aditya__50'
              target='_blank'
              rel='nofollow noopener noreferer'
            >
              <span
                className='iconify'
                data-icon='ant-design:twitter-outlined'
                data-inline='false'
              ></span>
            </StyledIcon>
            <StyledIcon
              href='mailto:adityakiitdelhi@gmail.com'
              target='_blank'
              rel='nofollow noopener noreferer'
            >
              <span
                className='iconify'
                data-icon='ant-design:mail-filled'
                data-inline='false'
                
              ></span>
            </StyledIcon>
          </SocialWrapper>
        </SectionCard>
      </ContactSection>
    </React.Fragment>
  )
}

export default HomeGrid
