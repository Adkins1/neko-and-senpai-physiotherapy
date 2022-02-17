import styled from "styled-components"
import { color, maxDevice } from "../../config/styles"

export const Container = styled.section`
  width: 100%;
  height: 92vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (${maxDevice.tablet}) {
    height: 160vh;
  }
  @media (orientation: landscape) {
    height: 160vh;
  }
`
export const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  @media screen and (${maxDevice.tablet}) {
    width: 90%;
  }
`
export const SubWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (${maxDevice.tablet}) {
    flex-direction: column;
  }
`
export const Header = styled.h1`
  width: 100%;
  height: 10%;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
`
export const Text = styled.h1`
  width: 100%;
  height: 10%;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
`
export const CalendarWrap = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (${maxDevice.tablet}) {
    width: 90%;
  }
`
export const Hours = styled.div`
  width: 30%;
  @media screen and (${maxDevice.tablet}) {
    width: 90%;
  }
`
export const Form = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (${maxDevice.tablet}) {
    width: 90%;
    flex-direction: column;
  }
`
export const Col = styled.div`
  height: 100%;
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  button {
    align-self: flex-end;
    border: none;
    font-size: 1.5rem;
    padding: 10px;
    background: ${color.purple};
    cursor: pointer;
    :hover {
      background: ${color.hoverPurple};
    }
  }
  @media screen and (${maxDevice.tablet}) {
    width: 100%;
  }
`
export const Input = styled.input`
  width: 90%;
  height: 2rem;
  font-size: 1.5rem;
`
export const TextInput = styled.textarea`
  width: 90%;
  height: 10rem;
  font-size: 1.5rem;
  resize: none;
`
