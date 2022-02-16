import styled from "styled-components"
import { color } from "../../config/styles"

export const Container = styled.section`
  width: 100%;
  height: 92vh;
  display: flex;

  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  h1 {
    width: 80%;
    font-size: 2rem;
    text-align: center;
  }
`
export const Wrapper = styled.div`
  width: 80%;
  border: 1px solid black;
  background: ${color.teal};
`
export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  :hover {
    background: ${color.lightPurple};
  }
  div {
    font-size: 1.5rem;
    height: 4rem;
    width: 100%;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-collapse: collapse;
  }
`
