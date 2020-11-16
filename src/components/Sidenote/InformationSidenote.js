import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const BaseWrapper = styled.aside`
  background: var(--color-cards);
  border-left-color: red;
  position: relative;
  padding: 24px 32px;
  font-size: 17px;
  margin-top: 24px;
  margin-bottom: 64px;
  border-left: 3px solid var(--color-informationCardHighlight);
  border-radius: 6px 6px 6px 3px;
  .last-line {
    padding: 0px;
  }
`
const IconWrapper = styled.div`
  color: var(--color-informationCardHighlight);
  position: absolute;
  top: 0px;
  left: 0px;
  transform: translate(-50%, -50%);
  padding: 8px;
  border-radius: 50%;
  background-color: var(--color-background);
  .iconify {
    width: 3rem;
    height: 3rem;
  }
`
const Title = styled.strong`
  font-size: 20px;
  font-weight: 700;
  display: block;
  margin-bottom: 8px;
`

const InformationSidenote = ({ title, children }) => {
  return (
    <BaseWrapper>
      <IconWrapper>
        <span
          className='iconify'
          data-icon='zondicons:information-solid'
          data-inline='false'
        ></span>
      </IconWrapper>
      <Title>{title}</Title>
      {children}
    </BaseWrapper>
  )
}

InformationSidenote.propTypes = {
  title: PropTypes.string
}

export default InformationSidenote
