import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { useSiteMetadata } from "./query/site"

const Footer = () => {
  const { title } = useSiteMetadata()

  return (
    <Wrapper>
      &copy; {new Date().getFullYear()}, 
      <Link to="/">{title}</Link>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  background: #000000;
  padding: 1rem;
  color: rgba(255, 255, 255, 0.85);
  text-align: center;
  a {
    color: rgba(255, 255, 255, 0.85);
    text-decoration: none;
    &:link, &:visited, &:hover, &:active {
      color: rgba(255, 255, 255, 0.85);
  }
`

export default Footer
