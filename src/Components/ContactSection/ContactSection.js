import React from "react"
import * as S from "./ContactSectionStyles"

import catImage from "../../img/kot-odpowiadacz.png"

const ContactSection = () => {
  return (
    <S.Container id="contact">
      <S.Wrapper>
        <S.OptionsWrapper>
          <S.Header>Masz pytania?</S.Header>
          <S.Form>
            <S.Input placeholder="Imię i nazwisko" type="text" />
            <S.Input placeholder="Twój e-mail" type="email" />
            <S.TextInput placeholder="Miejsce na treść pytania" type="text" />
            <button type="submit">Wyślij</button>
            <S.Rodo>
              Twoje dane przechowuje Kawka Technologies Company i zdecydowanie
              są u nas bezpieczne
            </S.Rodo>
          </S.Form>
        </S.OptionsWrapper>
        <S.ImageWrapper>
          <S.Image src={catImage} />
        </S.ImageWrapper>
      </S.Wrapper>
    </S.Container>
  )
}

export default ContactSection
