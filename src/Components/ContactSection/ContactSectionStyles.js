import styled from "styled-components"
import { color, maxWidthDevice, maxHeightDevice } from "../../config/styles"

export const Container = styled.section`
  width: 100%;
  height: 92vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (${maxWidthDevice.tablet}) {
    height: 110vh;
  }
  @media screen and (${maxHeightDevice.mobileL}) {
    height: 130vh;
  }
`
export const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (${maxWidthDevice.tablet}) {
    flex-direction: column;
  }
  @media screen and (${maxHeightDevice.mobileL}) {
    flex-direction: row;
  }
`
export const OptionsWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (${maxWidthDevice.tablet}) {
    width: 100%;
  }
  @media screen and (${maxHeightDevice.mobileL}) {
    width: 50%;
  }
`
export const Header = styled.h1`
  width: 100%;
  height: 10%;
  font-size: 2rem;
`
export const Form = styled.form`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
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
  font-size: 1.5rem;
  height: 2rem;
`
export const TextInput = styled.textarea`
  width: 100%;
  height: 10rem;
  font-size: 1.5rem;
`
export const ImageWrapper = styled.div`
  width: 50%;
  height: 100%;
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`
export const Rodo = styled.div`
  width: 100%;
  height: 20%;
`
