import React from "react"
import * as S from "./TeamSectionStyles"
import Slider from "react-slick"
import { teamMembers } from "../../data/teamMembers"

const TeamSection = () => {
  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    //autoplay: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  }
  function PrevArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
        }}
        onClick={onClick}
      />
    )
  }
  function NextArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
        }}
        onClick={onClick}
      />
    )
  }

  return (
    <S.Container>
      <S.Wrapper>
        <S.HeadWrap>
          <S.Header>Nasz zespół:</S.Header>
          <S.HeadText>
            Naszą misja to jak najszybsza likwidacja objawów bólowych,
            eliminacja przyczyn ich powstawania oraz edukacja pacjentów lub ich
            opiekunów. Prowadzimy terapię tak aby powrót do pełnej sprawności
            naszych pacjentów był jak najszybszy.
          </S.HeadText>
        </S.HeadWrap>
        <S.SliderWrap>
          <Slider {...settings}>
            {teamMembers.map((member, index) => (
              <S.SlideItemWrap key={index}>
                <S.SlideItem>
                  <S.SlideImage src={member.image} />
                  <S.SlideText>{member.text}</S.SlideText>
                </S.SlideItem>
              </S.SlideItemWrap>
            ))}
          </Slider>
        </S.SliderWrap>
      </S.Wrapper>
    </S.Container>
  )
}

export default TeamSection
