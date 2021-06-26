import React from 'react'
import styled from 'styled-components'
import { transitionCss } from '../styles/styleUtils'
import Caption from '../components/Caption'

const iconSize = {
  small: 10,
  default: 20,
}

const TextIconContainer = styled.div`
  display: inline-block;
  text-align: center;
`

const TextIconButton = styled.a`
  padding-bottom: ${p => p.size ? iconSize[`${p.size}`] / 2 : iconSize['default'] / 2}px;
  padding-left: ${p => p.size ? iconSize[`${p.size}`] - 1: iconSize['default']}px;
  padding-right: ${p => p.size ? iconSize[`${p.size}`] - 1: iconSize['default']}px;
  border-radius: ${(p => p.size ? iconSize[`${p.size}`] * 3 : iconSize['default'] * 3)}px;
  font-size: ${p => p.size ? iconSize[`${p.size}`] * 2 : iconSize['default'] * 2}px;
  color: white;
  border: solid white 2px;
  background-color: ${p => p.color};
  margin: 5px;
  ${transitionCss}
  :hover {
    opacity: 0.5;
  }
`

export const TextIcon = ({ textLetter, children, className, size,  complete, ...rest }) => {
  return (
    <TextIconContainer>
        <TextIconButton className={className} size={size} complete={complete} {...rest}>
        {textLetter}
        </TextIconButton>
        <Caption>{children}</Caption>
    </TextIconContainer>
  )
}

export default TextIcon