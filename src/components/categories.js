import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { useCategories } from "./query/categories"
import SubTitle from "../components/subTitle"

const Categories = () => {
  const categories = useCategories()

  return (
    <Wrapper>
      {Object.keys(categories).map(key => (
        <Category>
          <Link to={`/${key}/`}>{categories[key]}</Link>
        </Category>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
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

const Category = styled.span`
  margin: 0 0.5rem 0 0;
`

export default Categories
