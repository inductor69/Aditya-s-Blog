import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const FigureCaption = styled.figcaption `
  font-size: 16px;
  text-align: center;
  color: var(--color-secondaryText);
  width: 100%;
  padding-bottom: 48px;
`

const ImageDivider = styled.div `
  margin: 32px auto 16px;
  padding: 10px;
  border: 1px solid var(--color-scrollbar);
  border-radius: 10px;

  img {
    width: 100%;
    border-radius: 5px;
    margin: auto;
  }
`

const BlogImages = ({ webpLink, jpegLink, figcaption, alt }) => {
  return (
    <React.Fragment>
      <ImageDivider>
        <figure>
          <source srcSet={webpLink} type="image/webp"/>
          <source srcSet={jpegLink} type="image/jpeg" />
          <img src={jpegLink} alt={alt} />
        </figure>
      </ImageDivider>
      <FigureCaption>{figcaption}</FigureCaption>
    </React.Fragment>
  )
}

BlogImages.propTypes = {
  webpLink: PropTypes.string.isRequired,
  jpegLink: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  figcaption: PropTypes.string
}

export default BlogImages

