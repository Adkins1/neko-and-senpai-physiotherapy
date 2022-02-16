import styled from "styled-components"
import { Link as LinkS } from "react-scroll"
import { color, maxDevice } from "../../config/styles"

export const Container = styled.nav`
  width: 100%;
  height: 10vh;
  background: ${color.white};
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 100;
`
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ContactInfo = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  font-weight: bold;
  background-color: ${color.purple};
  justify-content: center;
  align-items: center;
`
export const Links = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Logo = styled.div`
  height: 100%;
  width: 35%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const LogoLink = styled(LinkS)`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  :hover {
    cursor: pointer;
    background: ${color.lightPurple};
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
export const Link = styled(LinkS)`
  height: 100%;
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  :hover {
    cursor: pointer;
    background: ${color.lightPurple};
  }
`
