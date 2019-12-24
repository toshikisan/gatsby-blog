import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { rgba } from "polished"

function Hero({ title, subtitle }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `
  )

  return (
    <Wrapper>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
    </Wrapper>
  )
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

Hero.defaultProps = {
  title: ``,
  subtitle: ``,
}

const Wrapper = styled.div`
`

export default Hero
