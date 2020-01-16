import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import "normalize.css"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <main>{children}</main>
      <Footer />
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const Wrapper = styled.div`
  font-family: "Noto Serif JP", "M PLUS 1p", sans-serif;
  color: rgba(0, 0, 0, 0.85);
  line-height: 2.4rem;
  letter-spacing: 0.08rem;
  a {
    color: rgba(0, 0, 0, 0.85);
  }
  main {
    margin: 0 auto;
    max-width: 720px;
    padding: 0 3rem 3rem 3rem;
  }
`

export default Layout
