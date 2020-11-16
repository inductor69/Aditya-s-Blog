import React from 'react'
import styled from 'styled-components'

import Layout from '@components/Layout'
import SEO from '@components/Seo'
import SmallHero from '@components/SmallHero'

import mixins from '@styles/mixins'
import media from '@styles/media'

const HeroWrapper = styled.div `
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 0 128px 0;
  margin: 0 auto;
  max-width: 800px;
  ${mixins.sidePadding}

  h1 {
    font-size: 48px;
    font-weight: 700;
    line-height: 1;
    padding-bottom: 36px; 
    ${media.tablet`font-size: 36px;`};
  }
  h2 {
    font-size: 18px;
    max-width: 500px;
    line-height: 1.4;
    padding-bottom: 36px;
  }
`

const ProjectSection = styled.div `
  img {
    ${mixins.sidePadding}
    position: relative;
    bottom: 100px;
    max-width: 800px;
    margin: 0 auto;
    z-index: 5;
    filter: drop-shadow(var(--color-cardsBoxShadow));
  }
  .project-overview {
    ${mixins.sidePadding}
    ${mixins.desktopAlignCenter}
    text-align: center;
    max-width: 800px;
    padding-bottom: 128px;
    h1 {
      font-size: 48px;
      font-weight: 700;
      line-height: 1;
      padding-bottom: 8px;
      ${media.tablet`font-size: 36px;`};
    }
    h4 {
      font-size: 16px;
      color: var(--color-secondaryText);
      padding-bottom: 36px;
    }
    p {
      line-height: 1.4;
    }
  }
  .goals {
    ${mixins.sidePadding}
    margin: 0 auto; 
    max-width: 800px;
    padding-top: 80px;
    padding-bottom: 80px;
    h1 {
      text-align: center;
      font-size: 36px;
      font-weight: 600;
      padding-bottom: 60px;
    }

    .flex-item h2 {
      font-size: 26px;
      font-weight: 700;
      display: inline;
      background-image: linear-gradient(
        transparent 0,
        transparent 55%,
        var(--color-cardUnderline) 55%,
        var(--color-cardUnderline) 90%,
        transparent 90%,
        transparent 100%
      );
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-position: 0%;
    }
    .flex-item p {
      font-size: 18px;
      padding-top: 28px;
      line-height: 1.4;
    }
  }
`

const OracaoPlay = () => {
  return (
    <React.Fragment>
      <SEO title="Oração Play - Ernesto Resende" />
      <Layout>
      <SmallHero>
          <HeroWrapper>
            <h1>Enabling the spread of faith in a digital environment</h1>
            <h2>OraçãoPlay is a praying and meditation mobile app available for Android and iOS users. The goal here was to rework the previous codebase, redesigning the app structure, layout and features to give users a more enjoyable experience.</h2>
          </HeroWrapper>
        </SmallHero>

        <ProjectSection>

          <section className="project-overview">
            <h1>Project Overview</h1>
            <h4>Faith as a mobile experience.</h4>
            <p>Oração Play's main objective is to provide the brazilian catholic community with an digital experience that serves as an extension to their activities in faith. The existing app was written in Angular with Ionic 3 back in 2017. The team's main objective was to deliver newly requested updates and features in a tight schedule, along with an app redesign.</p>
          </section>

          <section className="goals">
            <h1>Goals</h1>
            <div className="flex-container">
              <div className="flex-item">
                <h2>Upgrade to Ionic 5</h2>
                <p>The app was written in Angular and Ionic 3 back in 2017. Since them, a lot of things changed (and for the most part, straight out broke) from one version to another. Our first job was migrate the entire codebase to Ionic 5, leveraging some of the framework performance enhancements, and making it easier to maintain a growing codebase in the future.</p>
              </div>
              <div className="flex-item">
                <h2>Iterate new features</h2>
                <p>The client requested a set of new features for the app, including a built-in system for watching and managing video-series, a discussion forum, and an events page that would let user know about and subscribe for upcoming events.</p>
              </div>
              <div className="flex-item">
                <h2>Redesign the user experience</h2>
                <p>Along with upgrades and new features, the client asked for a full revision of their design structure. It was in our hands to create, iterate and document an simple, yet effective design system that would streamline the user experience in the future.</p>
              </div>
            </div>
          </section>
        </ProjectSection>
      </Layout>
    </React.Fragment> 
  )
}

export default OracaoPlay
