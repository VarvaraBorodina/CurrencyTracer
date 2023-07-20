import { Coordinate } from '@/components/Map/types'

export type Geocodes = {
  main: Coordinate
}
export type BankInfo = {
  geocodes: Geocodes
  fsq_id: string
}
