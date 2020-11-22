import React from 'react'
import styled from 'styled-components'
import MailchimpSubscribe from "react-mailchimp-subscribe"
import BlogNavigation from '@components/BlogNavigation'
import NavigationDrawer from '@components/NavigationDrawer'
import Footer from '@components/Footer'
import SEO from '@components/Seo'
import Mailchimp from 'react-mailchimp-form'

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
const url = "https://gmail.us10.list-manage.com/subscribe/post?u=64f44007562ba29666f848b31&amp;id=c571916657";

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
const CustomForm = () => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <div>
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
        {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
      </div>
    )}
  />
)
const Newsletter = () => {
  
  return(
    <React.Fragment>
      <BlogNavigation /> 
      <SEO title="Newsletter" />

      <Main>
        <NewsletterTitle>New content directly delivered to your mail.</NewsletterTitle>
        <NewsletterDescription>Get Latest tech updates. Unsubscribe anytime!</NewsletterDescription>

        <FormContainer>
        <Mailchimp
  action='https://gmail.us10.list-manage.com/subscribe/post?u=64f44007562ba29666f848b31&amp;id=c571916657' 
  
  //Adding multiple fields:
  fields={[
    {
      name: 'EMAIL',
      placeholder: 'Email',
      type: 'email',
      required: true
    },
    {
      name: 'FNAME',
      placeholder: 'First Name',
      type: 'text',
      required: true
    }
  ]}
  // Change predetermined language
  messages = {
    {
      sending: "Sending...",
      success: "Thank you for subscribing!",
      error: "An unexpected internal error has occurred.",
      empty: "You must write an e-mail.",
      duplicate: "Too many subscribe attempts for this email address",
      button: "Subscribe!"
    }
  }
  // Add a personalized class
  className='<YOUR_CLASSNAME>'
  />
            
        </FormContainer> 
      </Main>
      <Footer />
      <NavigationDrawer />

    </React.Fragment> 
  )
}

export default Newsletter