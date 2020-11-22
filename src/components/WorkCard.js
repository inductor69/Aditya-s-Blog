import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'

const Main = styled(props => <GatsbyLink {...props} />)`
  margin-bottom: 32px;
  img {
    border-radius: 5px; 
    max-height: 280px;
    object-fit: cover;
    transition: 0.2s ease 0s;
  }

  &:hover img {
    transform: scale(1.02);
    box-shadow: var(--color-cardsBoxShadow);
  }

  &:hover .card-container .read-more {
    color: var(--color-highlights);
  }

  .card-container {
    margin-top: 32px;
    position: relative;
    display: block;
    color: var(--color-text);
    text-decoration: none;
    h2 {
      font-weight: 600;
      font-size: 36px;
      padding-bottom: 18px;
    }
    p {
      color: var(--color-secondaryText);
      font-size: 16px;
      padding-bottom: 18px;
      line-height: 1.7; 
    }
    .read-more {
      font-size: 16px;
      font-weight: 700;
      border-bottom: 2px solid transparent;
      transition: 0.3s ease 0s;
    }
  }
`


const WorkCard = ({ thumbnail, thumbAlt, title, description, href, projectLink }) => {
  return (
    <Main to={href}>
      <img src={thumbnail} alt={thumbAlt}/>
      <div className="card-container">
        <h2>{title}</h2>
        <p>{description}</p>
        <span className="read-more">{projectLink}</span>
      </div>
    </Main>
  )
}

WorkCard.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  thumbAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
}

export default WorkCard
