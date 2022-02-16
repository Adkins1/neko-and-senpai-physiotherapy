//const parralax = document.getElementById("parralax")

export const parralaxImg = (parralax) => {
  window.addEventListener("scroll", () => {
    let offset = window.pageYOffset
    parralax.style.backgroundPositionY = offset * 0.7 + "px"
  })
}
