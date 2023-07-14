import L, { Marker } from 'leaflet'
import React from 'react'

import LOCATION from '@/constants/location'

import { Container, MapBlock } from './styled'

export type Coordinate = {
  latitude: number
  longitude: number
}
type MapType = {
  banksCoordinates: Coordinate[]
}

class Map extends React.Component<MapType> {
  protected map: any

  protected mapMarkers: Marker[]

  constructor(props: any) {
    super(props)
    this.mapMarkers = []
  }

  componentDidMount(): void {
    this.map = L.map('map').setView([LOCATION.latitude, LOCATION.longitude], 15)
    L.marker([LOCATION.latitude, LOCATION.longitude]).addTo(this.map)
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
      const marker = L.marker([Number(latitude), Number(longitude)]).addTo(
        this.map
      )
      this.mapMarkers.push(marker)
    })
  }

  render() {
    this.updateMap()
    return (
      <Container data-cy="map">
        <MapBlock id="map" />
      </Container>
    )
  }
}

export default Map
