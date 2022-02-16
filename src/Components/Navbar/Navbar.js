import React from "react"
import * as S from "./NavbarStyles"
import logoImg from "../../img/nekoSenpai.png"

const Navbar = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.ContactInfo>📧 NekoSenpai@gmail.com || ☎️ 963111333</S.ContactInfo>
        <S.Links>
          <S.Logo>
            <S.LogoLink
              to="head"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              <img src={logoImg} alt="logo" />
            </S.LogoLink>
          </S.Logo>
          <S.Link
            to="offer"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Oferta
          </S.Link>
          <S.Link
            to="price"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Cennik
          </S.Link>
          <S.Link
            to="calendar"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Kalendarz
          </S.Link>
          <S.Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Kontakt
          </S.Link>
        </S.Links>
      </S.Wrapper>
    </S.Container>
  )
}

export default Navbar
