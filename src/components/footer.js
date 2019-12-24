import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { rgba } from "polished"

const Footer = ({ siteTitle }) => (
  <Wrapper>
    &copy; {new Date().getFullYear()}, 
    <Link to="/">{siteTitle}</Link>
  </Wrapper>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

const Wrapper = styled.footer`
  background: #000000;
  padding: 1rem;
  color: rgba(255, 255, 255, 0.85);
  text-align: center;
  a {
    color: rgba(255, 255, 255, 0.85);
  }
`

export default Footer
