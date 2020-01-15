import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

function Title({ title }) {

  return (
    <Wrapper>
      <h2>{title}</h2>
    </Wrapper>
  )
}

Title.propTypes = {
  title: PropTypes.string
}

Title.defaultProps = {
  title: ``
}

const Wrapper = styled.div`
  height: 50vh;
  min-height: 400px;
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  h2 {
    font-weight: normal;
  }
`

export default Title
