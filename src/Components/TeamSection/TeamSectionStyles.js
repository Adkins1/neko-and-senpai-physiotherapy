import styled from "styled-components"
import { color } from "../../config/styles"

export const Container = styled.section`
  width: 100%;
  height: 92vh;
  background-color: ${color.white};
  display: flex;
  justify-content: center;
  align-items: center;
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
export const HeadWrap = styled.div`
  height: 40%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Header = styled.h1`
  width: 100%;
  height: 50%;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
`
export const HeadText = styled.div`
  height: 50%;
  font-size: 1.5rem;
  text-align: center;
`
export const SliderWrap = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .slick-slider {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .slick-prev:before {
      font-size: 3rem;
      color: gray;
    }
    .slick-next:before {
      font-size: 3rem;
      color: gray;
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
export const SlideText = styled.div``
