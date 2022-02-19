import styled from "styled-components"
import { maxWidthDevice, maxHeightDevice } from "../../config/styles"

export const Container = styled.div`
  width: 40%;
  height: 90%;
  @media screen and (${maxWidthDevice.tablet}) {
    width: 90%;
    height: 40%;
  }
  @media screen and (${maxHeightDevice.mobileL}) {
    width: 40%;
    height: 90%;
  }
  .leaflet-container {
    width: 100%;
    height: 100%;
  }
`
