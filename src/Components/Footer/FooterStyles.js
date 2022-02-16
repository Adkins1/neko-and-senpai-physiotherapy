import styled from "styled-components"
import { color } from "../../config/styles"

export const Container = styled.section`
  width: 100%;
  height: 50vh;
  background: ${color.purple};
  display: flex;
  justify-content: center;
`
export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const Links = styled.div`
  height: 80%;
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  font-size: 1.5rem;
  :hover {
    cursor: pointer;
    transform: scale(110%);
  }
`
export const Social = styled.div`
  height: 80%;
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
export const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  font-size: 1.5rem;
  text-decoration: none;
  color: black;
  svg {
    margin-right: 10px;
  }
  :hover {
    transform: scale(110%);
  }
`
