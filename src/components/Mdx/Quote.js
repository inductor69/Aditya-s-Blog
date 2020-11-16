import React from 'react'
import styled from 'styled-components'

const Blockquote = styled.blockquote `
  padding: 3rem;
  color: var(--color-secondaryText);
  font-style: italic;
  text-align: center;
`

const Quote = ({ children }) => {
  return (
    <Blockquote>
      {children}
    </Blockquote>
  )
}

export default Quote
