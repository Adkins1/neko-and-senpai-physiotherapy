import React from "react"
import { prices } from "../../data/prices"
import * as S from "./PriceSectionStyles"

const PriceSection = () => {
  return (
    <S.Container id="price">
      <h1>🧾 Ceny usług:</h1>
      <S.Wrapper>
        {prices.map((item, index) => (
          <S.Row key={index}>
            <div>{item.name}</div>
            <div>{item.time}</div>
            <div>{item.price} zł</div>
          </S.Row>
        ))}
      </S.Wrapper>
    </S.Container>
  )
}
export default PriceSection
