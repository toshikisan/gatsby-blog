import React from "react"
import styled from "styled-components"
import { useSiteMetadata } from "./query/site"

function Hero() {
  const { title, subtitle } = useSiteMetadata()

  return (
    <Wrapper>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  min-height: 400px;
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  h2 {
    font-weight: normal;
  }
  h3 {
    font-weight: normal;
  }
`

export default Hero
