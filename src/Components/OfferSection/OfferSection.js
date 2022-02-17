import React from "react"
import * as S from "./OfferSectionStyles"

import offerKids from "../../img/offer-kids.jpg"
import offerHomeRehab from "../../img/offer-home-rehab.jpg"
import offerMassage from "../../img/offer-massage.jpg"
import offerRehab from "../../img/offer-rehab.webp"

const OfferSection = () => {
  return (
    <S.Container id="offer">
      <S.Wrapper>
        <S.Header>Nasze usługi:</S.Header>
        <S.Row>
          <S.Image src={offerMassage} />
          <S.Text>
            💆‍♀️ <br /> Masaż klasyczny
          </S.Text>
        </S.Row>
        <S.Row>
          <S.Image ord={2} src={offerKids} />
          <S.Text ord={1}>
            👨‍👩‍👦‍👦 <br /> Zajęcia korekcyjne z dziećmi
          </S.Text>
        </S.Row>
        <S.Row>
          <S.Image src={offerRehab} />
          <S.Text>
            👨‍🦽 <br /> Rehabilitacja
          </S.Text>
        </S.Row>
        <S.Row>
          <S.Image ord={2} src={offerHomeRehab} />
          <S.Text ord={1}>
            🏠 <br /> Wizyty domowe fizjoterapeuty
          </S.Text>
        </S.Row>
      </S.Wrapper>
    </S.Container>
  )
}

export default OfferSection
