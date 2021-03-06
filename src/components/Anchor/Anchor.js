import React from 'react'
import styled from 'styled-components'
import { Link as LinkRouter} from 'react-router-dom'
import { Theme } from '../Theme'

const Link = styled(LinkRouter)`
  width: 100%;
  position: relative;
  padding: 10px;
  border-radius: ${Theme.border_radius};
  outline: none;
  border: none;
  color: ${Theme.colors.primary_color};
  font-weight: bold;
  font-size: ${Theme.font.font_size};
  font-family: ${Theme.font.font_family};
  ${props => props.disabled && 'cursor: not-allowed;'}
  text-decoration:none; 
`

const Text = styled.span`
  font-size: ${Theme.font.font_size};
  font-family: ${Theme.font.font_family};
  cursor: default;
`

const Wrapper = styled.div`
  margin: 20px 0;
`

export const Anchor = (props) => {
  const {
    text, 
    description, 
    to
  } = props

  return(
    <Wrapper>
      <Text>{text}</Text>
      <Link to={to}>
        {description}
      </Link>
    </Wrapper>
  )
}