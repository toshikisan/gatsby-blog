import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { useTags } from "./query/tags"
import SubTitle from "../components/subTitle"

const Tags = () => {
  const { group } = useTags()

  return (
    <Wrapper>
      <SubTitle title="すべてのタグ" />
      {group.map((tag) => 
        <Tag>
          <Link to={`/tags/${tag.fieldValue}`}>#{tag.fieldValue}({tag.totalCount})</Link>
        </Tag>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
`

const Tag = styled.span`
  margin: 0 0.5rem 0 0;
`

export default Tags
