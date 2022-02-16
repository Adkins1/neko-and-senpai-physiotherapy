import React, { useState } from "react"
import * as S from "./CalendarSectionStyles"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"

const CalendarSection = () => {
  const [value, setValue] = useState(new Date())

  return (
    <S.Container id="calendar">
      <S.Wrapper>
        <S.CalendarWrap>
          <h1>Wybierz datę wizyty:</h1>
          <Calendar onChange={setValue} value={value} />
          <S.Hours></S.Hours>
        </S.CalendarWrap>
        <S.Form>
          <S.Col>
            <h1>Dane osobowe:</h1>
            <S.Input placeholder="Imię" type={"text"} />
            <S.Input placeholder="Nazwisko" type={"text"} />
            <S.Input placeholder="Pesel" type={"number"} />
            <S.Input placeholder="Numer Telefonu" type={"tel"} />
          </S.Col>
          <S.Col>
            <h1>Uwagi:</h1>
            <S.TextInput placeholder="Miejsce na uwagi" />
            <button type="submit">Wyślij</button>
          </S.Col>
        </S.Form>
      </S.Wrapper>
    </S.Container>
  )
}

export default CalendarSection
