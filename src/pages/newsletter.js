import React from 'react'
import styled from 'styled-components'

import BlogNavigation from '@components/BlogNavigation'
import NavigationDrawer from '@components/NavigationDrawer'
import Footer from '@components/Footer'
import SEO from '@components/Seo'

import mixins from '@styles/mixins'
import media from '@styles/media'

const Main = styled.div `
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 70vh;
  max-width: 600px;
  ${mixins.sidePadding}
  ${mixins.desktopAlignCenter}
`

const FormContainer = styled.div `
  margin: 0 auto;
  form {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-row-gap: 24px;
    grid-column-gap: 12px;
    max-width: 600px;
  }
  label {
    position: relative;
    display: block;
  }
  input {
    height: 50px;
    background: transparent;
    font-size: 16px;
    border: solid 1px var(--color-secondaryText);
    border-radius: 6px;
    padding: 8px 16px;
    color: var(--color-text);
    outline: none;
    width: 100%;
    transition: all 200ms ease-out 0s;
  }
  input::placeholder {
    
  }
  input:focus, input.populated {
    border: solid 1px var(--color-highlights);
    box-shadow: var(--color-formControlBoxShadow);
  }
  button {
    appearance: none;
    background-color: var(--color-highlights);
    border-radius: 0.6em;
    color: #fff;
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    line-height: 1;
    padding: 0.8em 2.5em;
    text-decoration: none;
    text-align: center;
    transition: box-shadow 100ms ease-in-out, color 100ms ease-in-out;
    &:hover {
      color: #fff;
    }
  }
`

const NewsletterTitle = styled.h1 `
  font-size: 42px;
  font-weight: 700;
  padding-bottom: 32px;
  ${media.tablet`font-size: 32px;`}
`

const NewsletterDescription = styled.p `
  font-size: 26px;
  padding-bottom: 64px;
  ${media.tablet`font-size: 22px;`}
`

const Newsletter = () => {
  return(
    <React.Fragment>
      <BlogNavigation /> 
      <SEO title="Newsletter - Ernesto Resende" />

      <Main>
        <NewsletterTitle>New content on your email as soon as they are out.</NewsletterTitle>
        <NewsletterDescription>Get updated with guides, tips and discussions about design and front-end development, with <b>early previews to upcoming posts.</b> No spamming, no compromisses, you can unsubscribe at any time.</NewsletterDescription>

        <FormContainer>
          <form action="https://forms.soundestlink.com/REST/forms/v1/subscribe?brandID=5fa568604c7fa4130887a42c&formType=landingPage&formID=5fa72a5b4c7fa41220eeb753&source=landingPage" method="POST" id="form">
            <div className="formcontrol-field">

              <div>
                <input 
                  id="field-email"
                  type="email" 
                  name="email" 
                  required="true"
                  autoComplete="off"
                  placeholder="Your email"
                />
              </div>

            </div>

            <button
              type="submit"
            >Subscribe</button> 

          </form>
        </FormContainer> 
      </Main>
      <Footer />
      <NavigationDrawer />

    </React.Fragment> 
  )
}

export default Newsletter