import React from 'react'
import { Link } from 'gatsby'

const slug = require('github-slugger').slug

export default ({ headings, url }) => {
  return (
    <ul>
      <li>
        <Link to={`/blog${url}#`}>Introduction</Link>
      </li>
      {headings
        .filter(heading => heading.depth !== 2)
        .map(heading => (
          <li key={heading.value}>
            <Link to={`/blog${url}#` + slug(heading.value)}>
              {heading.value}
            </Link>
          </li>
        ))}
    </ul>
  )
}
