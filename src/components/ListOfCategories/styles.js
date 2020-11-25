import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/Animation'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  ${props => props.fixed && css`
    position: fixed;
    left: 0;
    right: 0;
    top: -20px;
    max-width: 400px;
    margin: 0 auto;
    padding: 5px;
    background: white;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, .3);
    transform: scale(.5);
    z-index: 1;
    ${fadeIn({ time: '1s' })}
  `}
`
export const Item = styled.li`
  padding: 0 8px;
`
