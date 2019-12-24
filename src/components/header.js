import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { rgba } from "polished"

const Header = ({ siteTitle }) => (
  <Wrapper>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
    <div className="menu">
      <Link to="/">Categories</Link>
      <Link to="/">About</Link>
    </div>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  color: rgba(0, 0, 0, 0.85);
  background: rgba(255, 255, 255, 0.85);
  width: 100%;
  z-index: 99;
  h1 {
    font-size: 1rem;
    font-weight: normal;
    padding: 0rem 1rem;
  }
  .menu {
    margin-left: auto;
    padding: 0rem 1rem;
    display: flex;
    a {
      padding: 0 0 0 1rem;
    }
  }
  a {
    &:link, &:visited, &:hover, &:active {
      color: rgba(0, 0, 0, 0.85);
      opacity: 0.85;
    }
  }
}
`

export default Header
