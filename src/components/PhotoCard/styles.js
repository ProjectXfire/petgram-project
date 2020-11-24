import styled from 'styled-components'
import { fadeIn } from '../../styles/Animation'

export const ImgWrapper = styled.div`
  height: 0;
  width: 100%;
  border-radius: 10px;
  display: block;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
`
export const Image = styled.img`
  ${fadeIn()}
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  box-shadow: 0 10px 14px rgba(0,0,0,0.2);
  object-fit: cover;
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 8px;
  & svg {
    margin-right: 4px;
  }
`
