import styled from "styled-components"
import { color } from "../../config/styles"

export const Container = styled.section`
  width: 100%;
  height: 92vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* padding: 30% 0 30% 0; */
`
export const CalendarWrap = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const Hours = styled.div`
  width: 30%;
`
export const Form = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  justify-content: space-around;
  align-items: center;
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
`
export const Input = styled.input`
  width: 100%;
  height: 5%;
  font-size: 1.5rem;
`
export const TextInput = styled.textarea`
  width: 100%;
  height: 20%;
  font-size: 1.5rem;
  resize: none;
`
