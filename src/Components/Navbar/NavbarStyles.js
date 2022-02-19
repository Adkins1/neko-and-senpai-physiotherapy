import styled from "styled-components"
import { Link as LinkS } from "react-scroll"
import { color, maxWidthDevice, maxHeightDevice } from "../../config/styles"

export const Container = styled.nav`
  width: 100%;
  height: 10vh;
  background: ${color.white};
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 10000;
  @media screen and (${maxHeightDevice.tablet}) {
    height: 20vh;
  }
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
  width: 90%;
  height: 70%;
  display: flex;
  justify-content: space-between;
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
  @media screen and (${maxWidthDevice.tablet}) {
    width: 100%;
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
  @media screen and (${maxWidthDevice.tablet}) {
    display: none;
  }
`
export const Hamburger = styled.div`
  display: none;

  @media screen and (${maxWidthDevice.tablet}) {
    display: block;
  }
  svg {
    font-size: 1.5rem;
    cursor: pointer;
  }
`
