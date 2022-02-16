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
        <S.Row center>
          <S.Text>Nasze usługi:</S.Text>
        </S.Row>
        <S.Row>
          <S.Image src={offerMassage} />
          <S.Text>💆‍♀️ Masaż klasyczny</S.Text>
        </S.Row>
        <S.Row>
          <S.Image ord={2} src={offerKids} />
          <S.Text ord={1}>👨‍👩‍👦‍👦 Zajęcia korekcyjne z dziećmi</S.Text>
        </S.Row>
        <S.Row>
          <S.Image src={offerRehab} />
          <S.Text>👨‍🦽 Rehabilitacja</S.Text>
        </S.Row>
        <S.Row>
          <S.Image ord={2} src={offerHomeRehab} />
          <S.Text ord={1}>🏠 Wizyty domowe fizjoterapeuty</S.Text>
        </S.Row>
      </S.Wrapper>
    </S.Container>
  )
}

export default OfferSection
