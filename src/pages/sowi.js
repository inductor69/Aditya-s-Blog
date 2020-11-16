import React from 'react'
import styled from 'styled-components'

import BlogNavigation from '@components/BlogNavigation'
import SEO from '@components/Seo'
import NavigationDrawer from '@components/NavigationDrawer'
import Footer from '@components/Footer'

import mixins from '@styles/mixins'
import media from '@styles/media'

const HeroWrapper = styled.div `
  display: flex;
  flex-direction: column;
  padding-top: 128px;
  padding-bottom: 128px;
  max-width: 1100px;
  margin: 0 auto;
  ${mixins.sidePadding}
  ${media.tablet`
    padding-top: 64px;
    padding-bottom: 64px;
  `};

  h1 {
    font-size: 56px;
    font-weight: 600;
    line-height: 1;
    padding-bottom: 48px; 
    ${media.tablet`font-size: 36px;`};
  }
  h2 {
    color: var(--color-secondaryText);
    font-size: 18px;
    line-height: 1.7;
    padding-bottom: 64px;
    max-width: 700px;
    ${media.tablet`font-size: 16px;`};
  }
  .project-desc-table {
    display: flex;
    ${media.tablet`flex-direction: column;`};
  }
  .project-desc-item {
    padding-right: 80px;
    ${media.tablet`
      padding-right: 24px;
      padding-bottom: 24px;
    `};
    h3 {
      font-weight: 700;
      font-size: 16px;
      text-transform: uppercase;
      padding-bottom: 24px;
      ${media.tablet`
        font-size: 14px;
        padding-bottom: 8px;
      `};
    }
    p {
      color: var(--color-secondaryText);
      font-size: 16px;
      padding-bottom: 8px;
      ${media.tablet`
        font-size: 14px;
        padding-bottom: 12px;
      `};
    }
    a {
      font-weight: 600;
      ${mixins.styledLink}
      font-size: 16px;
    }
  }
`

const ImageContainer = styled.div `
  ${mixins.sidePadding}
  .home-image {
    max-width: 1100px;
    margin: 0 auto;
    z-index: 5;
    box-shadow: var(--color-projectImageShadow);
    border-radius: 10px;
    ${media.tablet`border-radius: 5px;`};
  }
`

const ProjectSection = styled.div `
  h1 {
      font-size: 36px;
      font-weight: 600;
      padding-bottom: 64px;
      ${media.tablet`font-size: 36px;`};
    }
    p {
      color: var(--color-secondaryText);
      line-height: 1.7;
      font-size: 18px;
      max-width: 700px;
      ${media.tablet`font-size: 16px;`};
    }

  .project-section {
    ${mixins.sidePadding}
    ${mixins.desktopAlignCenter}
    max-width: 1100px;
    padding-top: 128px;
    padding-bottom: 64px;
    ${media.tablet`
    padding-top: 64px;
    padding-bottom: 64px;
    `};
  }

  .goals-section {
    display: flex;
    align-items: center;
    ${mixins.sidePadding}
    ${mixins.desktopAlignCenter}
    max-width: 1100px;
    padding-top: 128px;
    padding-bottom: 128px;
    ${media.tablet`
    padding-top: 64px;
    padding-bottom: 64px;
    display: block;
    `};

    .article-image {
      max-width: 600px;
      z-index: 5;
      box-shadow: var(--color-projectImageShadow);
      border-radius: 3px;
    }
    .goals-text {
      margin-left: 48px;
      max-width: 350px;
      ${media.tablet`
        padding-top: 64px;
        padding-bottom: 64px;
        margin-left: 0;
        max-width: none;
      `};
      p {
        padding-bottom: 30px;
      }
    }
  }
`

const ProjectSowi = () => {
  return (
    <React.Fragment>
      <SEO title="Project SOWI - Ernesto Resende" />
      <BlogNavigation/>
        <HeroWrapper>
            <h1>SOWI</h1>
            <h2>SOWI is a project that aims to discuss and analyze the culture of entertainment. The goal is to create a scalable and consistent user-interface for the main website, along with it's development and long-run maintenance.</h2>
            <div className="project-desc-table">
              
              <div className="project-desc-item">
                <h3>Roles</h3>
                <p>UI Design</p>
                <p>Front-end Development</p>
              </div>
              <div className="project-desc-item">
                <h3>Stack</h3>
                <p>React</p>
                <p>Styled Components</p>
                <p>GraphQL</p>
              </div>
              <div className="project-desc-item">
                <h3>Github Repo</h3>
                <a 
                  target='_blank' rel='noreferer noopener nofollow' 
                  href="https://github.com/projetosowi/projetosowi.com.br">
                  View Code
                </a>
              </div>
            
            </div>
        </HeroWrapper>

        <ImageContainer>
          <figure>
            <source srcSet="https://res.cloudinary.com/ernestoresende/image/upload/v1603584417/work/ProjetoSOWI_Home_Browser_tac98p.webp" type="image/webp"/>
            <source srcSet="https://res.cloudinary.com/ernestoresende/image/upload/v1603584417/work/ProjetoSOWI_Home_Browser_tac98p.jpeg" type="image/jpeg"/>
            <img 
              className="home-image"
              src="https://res.cloudinary.com/ernestoresende/image/upload/v1603584417/work/ProjetoSOWI_Home_Browser_tac98p.jpeg" 
              alt="Project SOWI landing page."
              width="1087"
              height="666"
            />
          </figure>
        </ImageContainer>
        
        <ProjectSection>

          <section className="project-section">
            <h1>Project Overview</h1>
            <p>Project SOWI is one bold attempt at creating a content production collective able to discuss the culture of entertainment that surrounds us. The project’s main medium is hosted on YouTube, where it's focused on producing high-quality research driven video-essays. But eventually the project grew in scope, and we saw the need to have different content mediums like articles and podcasts. My main objective is to design, develop and deploy a website that would be the home for everything related to the project.</p>
          </section>

          <section className="goals-section">
            <div>
              <img
                className="article-image" 
                src="https://res.cloudinary.com/ernestoresende/image/upload/v1603665881/work/ProjetoSOWI_Individual_Article_Cut_lryrdc.jpeg" 
                alt="Project SOWI article page."
                width="600"
                height="728"  
              />
            </div>

            <div className="goals-text">
            <h1>Goals</h1>  
              <div>
              <p>The website needed to have consistent modules and design choices across all sections. It was my job to make sure every page across the site would follow the same brand guidelines.</p>
              <p>As SOWI is a project in constant evolution, I needed to make sure it was going to be scalable in the long-run, both in regards to enabling the easy development of new features on the future, and allowing for easy content management for me and future team members that will be creating content for the website.</p>
            </div>
            </div>
          </section>

          <section className="project-section">
            <div>
            </div>

            <div className="projects-text">
            <h1>The Web Stack</h1>  
              <div>
              <p>From the get-go, We wanted to go with React paired with a Static Site Generator for this project. It was only a matter of analyzing the ones that would provide the best balance between development experience and build-time performance at high-scale. And <b>Gatsby</b> was the one that best striked the balance for us.</p>
              </div>
            </div>
          </section>

          <section className="project-section">
            <div>
            </div>

            <div className="projects-text">
            <h1>What comes next</h1>  
              <div>
              <p>SOWI is a laid-back project going for the long run. In a forseeable future, we can see ourselves taking the shot at a solid crowdfunding campaign to help raise the project to the next level.</p>
              <p>As it is now, SOWI will continue to be nourished with the desire to discuss the products from the entertainment culture that we love and understanding what makes them special, promoting public discussions and avoiding the noises from traditional journalism vehicles.</p>
              </div>
            </div>
          </section>

          
        </ProjectSection>
      <Footer/>
      <NavigationDrawer/>
    </React.Fragment>
  )
}

export default ProjectSowi
