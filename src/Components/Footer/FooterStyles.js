import styled from "styled-components"
import { color, maxWidthDevice, maxHeightDevice } from "../../config/styles"

export const Container = styled.section`
  width: 100%;
  height: 50vh;
  background: ${color.purple};
  display: flex;
  justify-content: center;
  @media screen and (${maxWidthDevice.tablet}) {
    height: 100vh;
  }
  @media screen and (${maxHeightDevice.mobileL}) {
    height: 100vh;
  }
`
export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (${maxWidthDevice.tablet}) {
    flex-direction: column;
  }
  @media screen and (${maxHeightDevice.mobileL}) {
    flex-direction: row;
  }
`
export const Links = styled.div`
  height: 80%;
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  @media screen and (${maxWidthDevice.tablet}) {
    height: 25%;
    width: 100%;
  }
  @media screen and (${maxHeightDevice.mobileL}) {
    height: 80%;
    width: 25%;
  }
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
  @media screen and (${maxWidthDevice.tablet}) {
    height: 25%;
    width: 100%;
  }
  @media screen and (${maxHeightDevice.mobileL}) {
    height: 80%;
    width: 25%;
  }
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
