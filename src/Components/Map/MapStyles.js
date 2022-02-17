import styled from "styled-components"
import { maxDevice } from "../../config/styles"

export const Container = styled.div`
  width: 40%;
  height: 90%;
  @media screen and (${maxDevice.tablet}) {
    width: 90%;
    height: 40%;
  }
  .leaflet-container {
    width: 100%;
    height: 100%;
  }
`
