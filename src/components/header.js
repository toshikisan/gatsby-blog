import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { useSiteMetadata } from "./queries"

const Header = () => {
  const { title } = useSiteMetadata()

  return (
    <Wrapper>
      <h1>
        <Link to="/">{title}</Link>
      </h1>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  h1 {
    font-size: 1rem;
    font-weight: normal;
  }
  a {
    &:link, &:visited, &:hover, &:active {
      color: rgba(0, 0, 0, 0.85);
      opacity: 0.85;
      text-decoration: none;
    }
  }
}
`

export default Header
