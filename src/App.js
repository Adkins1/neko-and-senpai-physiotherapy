import React, { useState } from "react"
import "./App.css"
import HeadSection from "./Components/HeadSection/HeadSection"
import Navbar from "./Components/Navbar/Navbar"
import OfferSection from "./Components/OfferSection/OfferSection"
import PriceSection from "./Components/PriceSection/PriceSection"
import CalendarSection from "./Components/CalendarSection/CalendarSection"
import ContactSection from "./Components/ContactSection/ContactSection"
import Footer from "./Components/Footer/Footer"
import TeamSection from "./Components/TeamSection/TeamSection"
import HamburgerMenu from "./Components/HamburgerMenu/HamburgerMenu"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function App() {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false)

  const toggleHamburger = () => {
    setIsHamburgerActive(!isHamburgerActive)
  }

  return (
    <>
      <HamburgerMenu
        isHamburgerActive={isHamburgerActive}
        toggleHamburger={toggleHamburger}
      />
      <Navbar toggleHamburger={toggleHamburger} />
      <HeadSection />
      <OfferSection />
      <TeamSection />
      <PriceSection />
      <CalendarSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
