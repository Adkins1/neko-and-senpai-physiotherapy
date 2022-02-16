import React from "react"
import * as S from "./FooterStyles"
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs"
import Map from "../Map/Map"

const Footer = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Links>
          <S.Link>Oferta</S.Link>
          <S.Link>Cennik</S.Link>
          <S.Link>Kalendarz</S.Link>
          <S.Link>Kontakt</S.Link>
        </S.Links>
        <S.Social>
          <S.SocialLink href="http://www.facebook.com" target="_blank">
            <BsFacebook style={{ color: "#4267B2" }} /> Facebook
          </S.SocialLink>
          <S.SocialLink href="https://www.instagram.com/" target="_blank">
            <BsInstagram style={{ color: "#E1306C" }} /> Instagram
          </S.SocialLink>
          <S.SocialLink href="https://twitter.com/" target="_blank">
            <BsTwitter style={{ color: "#1DA1F2" }} /> Twitter
          </S.SocialLink>
          <S.SocialLink href="https://www.youtube.com/" target="_blank">
            <BsYoutube style={{ color: "#FF0000" }} /> Youtube
          </S.SocialLink>
        </S.Social>
        <Map />
      </S.Wrapper>
    </S.Container>
  )
}

export default Footer
