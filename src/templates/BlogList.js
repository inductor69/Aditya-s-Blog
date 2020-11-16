import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { Link as GatsbyLink } from 'gatsby'

import SEO from '@components/Seo'
import Layout from '@components/Layout'
import SmallHero from '@components/SmallHero'
import BlogItem from '@components/BlogItem'

import mixins from '@styles/mixins'

const Main = styled.div`
  padding-top: 60px;
  max-width: 780px;
  margin: 0 auto;
  ${mixins.sidePadding}
`

//Pagination Styling, could be moved to components later
const Pagination = styled.nav`
  ${mixins.desktopAlignCenter}
  align-items: center;
  display: flex;
  font-size: 1.8rem;
  justify-content: space-between;
  padding-bottom: 2.8rem;
`
const PaginationLink = styled(props => <GatsbyLink {...props} />)`
  color: var(--color-text);
  transition: all ease-in-out 0.1s;
  :hover {
    color: var(--color-highlights);
  }
`

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMdx
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage =
      currentPage - 1 === 1 ? '/blog/' : `/blog/page/${currentPage - 1}`
    const nextPage = `/blog/page/${currentPage + 1}`

    return (
      <div>
        <SEO 
          title='Blog - Ernesto Resende'
          pathname='/blog'  
        />
        <Layout>
          <SmallHero />

          <Main>
            <div>
              {posts.map(({ node: post }) => (
                <BlogItem
                  key={post.id}
                  timeToRead={post.timeToRead}
                  slug={`/blog${post.fields.slug}`}
                  title={post.frontmatter.title}
                  excerpt={post.excerpt}
                  description={post.frontmatter.description}
                />
              ))}
            </div>

            <Pagination>
              {!isFirst && (
                <PaginationLink to={prevPage} rel='prev'>
                  ← Previous
                </PaginationLink>
              )}

              <span>
                {currentPage} of {numPages}
              </span>

              {!isLast && (
                <PaginationLink to={nextPage} rel='next'>
                  Next →
                </PaginationLink>
              )}
            </Pagination>
          </Main>
        </Layout>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query blogPageQuery($limit: Int!, $skip: Int!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          timeToRead
          excerpt(pruneLength: 230)
          fields {
            slug
          }
          frontmatter {
            title
            description
            date
          }
        }
      }
    }
  }
`
