import styled from "styled-components"
import { color, maxDevice } from "../../config/styles"

export const Container = styled.section`
  width: 100%;
  height: 92vh;
  background-color: ${color.white};
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (${maxDevice.tablet}) {
    height: 100vh;
  }
  @media (orientation: landscape) {
    height: 160vh;
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
    width: 90%;
  }
  @media (orientation: landscape) {
    width: 90%;
  }
`
export const HeadWrap = styled.div`
  height: 40%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (${maxDevice.tablet}) {
    width: 95%;
    height: 60%;
  }
  @media (orientation: landscape) {
    width: 95%;
    height: 60%;
  }
`
export const Header = styled.h1`
  width: 100%;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
`
export const HeadText = styled.div`
  font-size: 1.5rem;
  text-align: center;
`
export const SliderWrap = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (${maxDevice.tablet}) {
    width: 95%;
    height: 30%;
  }
  @media (orientation: landscape) {
    width: 95%;
    height: 60%;
  }

  .slick-slider {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (${maxDevice.tablet}) {
      width: 90%;
    }
    .slick-prev:before {
      font-size: 3rem;
      color: gray;
      @media screen and (${maxDevice.tablet}) {
        font-size: 2rem;
      }
    }
    .slick-next:before {
      font-size: 3rem;
      color: gray;
      @media screen and (${maxDevice.tablet}) {
        font-size: 2rem;
      }
    }
    .slick-list {
      width: 80%;
    }
  }
`
export const SlideItemWrap = styled.div`
  height: 80%;
  width: 30%;
`
export const SlideItem = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
`
export const SlideImage = styled.img`
  width: 60%;
  object-fit: cover;
  border-radius: 50%;
`
export const SlideText = styled.div`
  width: 50%;
  text-align: center;
`
