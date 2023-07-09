import L from 'leaflet'
import React from 'react'

import { Container, MapBlock } from './styled'

type Coordinate = {
  latitude: number
  longitude: number
}
type MapType = {
  banksCoordinates: Coordinate[]
}

class Map extends React.Component<MapType> {
  map: any

  constructor(props: any) {
    super(props)
    this.map = null
  }

  componentDidMount(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords
      this.map = L.map('map').setView([Number(latitude), Number(longitude)], 15)

      L.marker([Number(latitude), Number(longitude)]).addTo(this.map)

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 30,
      }).addTo(this.map)
    })
  }

  render() {
    const { banksCoordinates } = this.props
    banksCoordinates.forEach(({ latitude, longitude }) => {
      L.marker([Number(latitude), Number(longitude)]).addTo(this.map)
    })
    return (
      <Container>
        <MapBlock id="map" />
      </Container>
    )
  }
}

export default Map
