import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

function SubTitle({ title }) {

  return (
    <Wrapper>
      <h2>{title}</h2>
    </Wrapper>
  )
}

SubTitle.propTypes = {
  title: PropTypes.string
}

SubTitle.defaultProps = {
  title: ``
}

const Wrapper = styled.div`
  h2 {
    font-size: 1rem;
    margin: 6rem 0 3rem 0;
    text-align: center;
    font-weight: normal;
  }
`

export default SubTitle
