import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Link as GatsbyLink } from 'gatsby'

import theme from '@styles/theme'
const { fontSizes, space } = theme

export const PostContainer = styled(props => <GatsbyLink {...props} />)`
  display: block;
  text-decoration: none;
  padding-bottom: 55px;

  .title {
    padding-bottom: 5px;
    font-size: 24px;
    line-height: 31px;
    letter-spacing: -0.1rem;
    font-weight: 600;
    color: var(--color-text);
    transition: all ease-in-out 0.1s;
  }

  &:hover .title {
    color: var(--color-highlights);
  }
`

const TimeToRead = styled.p`
  padding-bottom: ${space.sm};
  font-size: ${fontSizes.xxs};
  color: var(--color-secondaryText);
`
const Description = styled.h2`
  padding-bottom: 18px;
  font-size: 20px;
  color: var(--color-secondaryText);
  font-weight: 600;
  letter-spacing: -0.05rem;
`
const Excerpt = styled.h2`
  font-size: 17px;
  color: var(--color-text);
  line-height: 2.6rem;
  font-weight: 400;
`

const BlogItem = ({ slug, timeToRead, title, description, excerpt }) => {
  return (
    <PostContainer to={`${slug}`} title={title}>
      <TimeToRead>{timeToRead} minutes read</TimeToRead>
      <h1 className="title">{title}</h1>
      <Description>{description}</Description>
      <Excerpt>{excerpt}</Excerpt>
    </PostContainer>
  )
}

BlogItem.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  timeToRead: PropTypes.number,
  description: PropTypes.string,
  excerpt: PropTypes.string,
}

export default BlogItem
