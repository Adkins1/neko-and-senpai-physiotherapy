import styled from "styled-components"
import { color, maxDevice } from "../../config/styles"

export const Container = styled.section`
  width: 100%;
  height: 92vh;
  background-color: ${color.white};
  display: flex;
  justify-content: center;
  @media screen and (${maxDevice.tablet}) {
    height: 150vh;
  }
  @media (orientation: landscape) {
    height: 150vh;
  }
`
export const Wrapper = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  @media screen and (${maxDevice.tablet}) {
    width: 100%;
    gap: 20px;
  }
  @media (orientation: landscape) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
`
export const Row = styled.div`
  height: 18%;
  width: 80%;
  display: flex;
  justify-content: ${({ center }) => (center ? "center" : "space-between")};
  @media screen and (${maxDevice.tablet}) {
    width: 90%;
    flex-wrap: wrap;
  }
  @media (orientation: landscape) {
    width: 45%;
  }
`
export const Image = styled.img`
  height: 100%;
  width: 40%;
  object-fit: cover;
  order: ${({ ord }) => (ord ? ord : 1)};
  transition: 0.2s;
  :hover {
    transform: scale(110%);
    transition: 0.2s;
  }
  @media screen and (${maxDevice.tablet}) {
    border-radius: 10px;
    width: 100%;
    height: 50%;
    order: 1;
  }
`
export const Text = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  order: ${({ ord }) => (ord ? ord : 2)};
  text-align: center;

  @media screen and (${maxDevice.tablet}) {
    width: 100%;
    order: 2;
    height: 50%;
    line-height: 1.5;
    font-size: 1.5rem;
  }
`
export const Header = styled.h1`
  width: 100%;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
`
