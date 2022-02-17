import React from "react"
import * as S from "./HamburgerMenuStyles"

const HamburgerMenu = ({ isHamburgerActive, toggleHamburger }) => {
  return (
    <>
      <S.Container
        isHamburgerActive={isHamburgerActive}
        onClick={toggleHamburger}
      >
        <S.Icon>
          <S.CloseIcon />
        </S.Icon>
        <S.Wrapper>
          <S.Menu>
            <S.Link
              onClick={toggleHamburger}
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
              onClick={toggleHamburger}
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
              onClick={toggleHamburger}
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
              onClick={toggleHamburger}
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Kontakt
            </S.Link>
          </S.Menu>
        </S.Wrapper>
      </S.Container>
    </>
  )
}

export default HamburgerMenu
