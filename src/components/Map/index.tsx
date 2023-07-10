import L, { Marker } from 'leaflet'
import React from 'react'

import { Container, MapBlock } from './styled'

export type Coordinate = {
  latitude: number
  longitude: number
}
type MapType = {
  banksCoordinates: Coordinate[]
  userCoordinate: Coordinate
}

class Map extends React.Component<MapType> {
  protected map: any

  protected mapMarkers: Marker[]

  constructor(props: any) {
    super(props)
    this.map = null
    this.mapMarkers = []
  }

  componentDidUpdate(): void {
    const {
      userCoordinate: { latitude, longitude },
    } = this.props
    if (!this.map) {
      this.map = L.map('map').setView([Number(latitude), Number(longitude)], 13)
    }

    L.marker([Number(latitude), Number(longitude)]).addTo(this.map)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 30,
    }).addTo(this.map)
  }

  updateMap() {
    const { banksCoordinates } = this.props
    this.mapMarkers.forEach((marker) => {
      this.map.removeLayer(marker)
    })
    banksCoordinates.forEach(({ latitude, longitude }) => {
      const myIcon = L.icon({
        iconUrl: '/icons/location.svg',
        iconSize: [38, 95],
      })
      const marker = L.marker([Number(latitude), Number(longitude)], {
        icon: myIcon,
      }).addTo(this.map)
      this.mapMarkers.push(marker)
    })
  }

  render() {
    this.updateMap()
    return (
      <Container>
        <MapBlock id="map" />
      </Container>
    )
  }
}

export default Map
