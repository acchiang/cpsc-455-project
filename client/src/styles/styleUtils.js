import { css } from 'styled-components'
import styled from "styled-components";

export const transitionCss = css`
    transition: all .5s ease-out;
    -moz-transition: all .5s ease-out;
    -webkit-transition: all .5s ease-out;
    -o-transition: all .5s ease-out;
`

export const text = css`
  color: ${p => p.theme.colors.text};
`

const headerText = css`
  ${text};
  font-family: ${p => p.theme.fonts};
`

export const Title = styled.h1`
  ${headerText};
  font-size: ${p => p.theme.fontSizes.title};
  margin: inherit;
  ${p => p.theme.mediaQueries.mobile} {
    font-size: ${p => p.theme.fontSizes.large};
  }
`

export const H1 = styled.h2`
  ${headerText};
  font-size: ${p => p.theme.fontSizes.large};
  font-weight: ${p => p.theme.fontWeight};
  ${p => p.theme.mediaQueries.mobile} {
    font-size: ${p => p.theme.fontSizes.medium};
  }
`

export const H2 = styled.h3`
  ${headerText};
  font-size: ${p => p.theme.fontSizes.medium};
  font-weight: ${p => p.theme.fontWeight};
  ${p => p.theme.mediaQueries.mobile} {
    font-size: ${p => p.theme.fontSizes.small};
  }
`

export const Logo = styled.img`
  ${p => p.theme.mediaQueries.mobile} {
    width: 100px;
  }
`
