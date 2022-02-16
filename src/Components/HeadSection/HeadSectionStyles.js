import styled from "styled-components"
import backgroundImage from "../../img/background-image.png"

export const Container = styled.div`
  height: 92vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundImage});
  background-size: cover;
  h1 {
    font-size: 7rem;
    color: white;
    text-shadow: 0 0 5px black;
  }
`

// export const Wrapper = styled.div`
//   height: 100%;
//   width: 100%;
//   background-image: url(${backgroundImage});
//   object-fit: cover;
//   h1 {
//     font-size: 7rem;
//     color: white;
//     text-shadow: 0 0 5px black;
//   }
// `
