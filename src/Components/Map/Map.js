import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import * as S from "./MapStyles"

const Map = () => {
  return (
    <S.Container>
      <MapContainer center={[52.72828, 15.24127]} zoom={15}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[52.72828, 15.24127]}>
          <Popup>
            Neko&Senpai <br /> Gabinet Fizjoterapii
          </Popup>
        </Marker>
      </MapContainer>
    </S.Container>
  )
}

export default Map
