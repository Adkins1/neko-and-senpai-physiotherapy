import React, { useEffect, useState } from "react"
import * as S from "./HeadSectionStyles"
import { useRef } from "react"

const HeadSection = () => {
  const containerRef = useRef()

  function changeBgPosY() {
    containerRef.current.style.backgroundPositionY =
      window.pageYOffset * 0.7 + "px"
  }

  useEffect(() => {
    window.addEventListener("scroll", changeBgPosY, true)
    return () => {
      window.removeEventListener("scroll", changeBgPosY, true)
    }
  })

  return (
    <S.Container ref={containerRef} id="head">
      <h1>Gabinet Neko&Senpai</h1>
    </S.Container>
  )
}

export default HeadSection
// () => {
//   //let offset = window.pageYOffset
//   //containerRef.current.style.backgroundPositionY = offset * 0.7 + "px"
//   console.log("scrolling")
// }
