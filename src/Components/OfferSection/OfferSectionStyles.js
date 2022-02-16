import styled from "styled-components"
import { color } from "../../config/styles"

export const Container = styled.section`
  width: 100%;
  height: 92vh;
  background-color: ${color.white};
  display: flex;
  justify-content: center;
`
export const Wrapper = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`
export const Row = styled.div`
  height: 18%;
  width: 80%;
  display: flex;
  justify-content: ${({ center }) => (center ? "center" : "space-between")};
`
export const Image = styled.img`
  height: 100%;
  width: 40%;
  object-fit: cover;
  order: ${({ ord }) => (ord ? ord : 1)};
  transition: 0.2s;
  /* border-radius: 50%; */
  :hover {
    transform: scale(110%);
    transition: 0.2s;
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
`
