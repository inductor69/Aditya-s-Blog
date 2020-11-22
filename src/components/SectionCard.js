import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import media from '@styles/media'

const MainWrapper = styled.div`
  padding: 0 0 50px;
`
const TextWrapper = styled.div`
  .card-header-wrapper {
    margin-top: 12px;
    margin-bottom: 28px;
  }
  h1 {
    font-size: 36px;
    font-weight: 900;
    letter-spacing: 0.2rem;
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
    background-size: 90% 100%;
    background-position: 0%;
  }
  p {
    padding-bottom: 20px;
    line-height: 26px;
  }
  .reset-padding {
    padding: 0px;
  }
  a {
    font-size: 26px;
    font-weight: 700;
    color: var(--color-secondaryText);
    padding-bottom: 20px;
    ${media.thone`font-size: 20px;`}
    ${media.phablet`font-size: 16px;`}
  }
  .social-media {
    padding-top: 20px;
  }
`

const SectionCard = ({
  title,
  description,

  children,
}) => {
  return (
    <React.Fragment>
      <MainWrapper>
        <TextWrapper>
          <div className='card-header-wrapper'>
            <h1>{title}</h1>
          </div>
          <p>{description}</p>
          
          <div className='social-media'>{children}</div>
        </TextWrapper>
      </MainWrapper>
    </React.Fragment>
  )
}

SectionCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  descriptionSecondLine: PropTypes.string,
  contactEmail: PropTypes.string,
}

export default SectionCard
