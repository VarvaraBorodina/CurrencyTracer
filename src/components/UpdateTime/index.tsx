import React from 'react'

import { Container, Dot, Text } from './styled'

type UpdateTimeType = {
  time: string
}
const UpdateTime = ({ time }: UpdateTimeType) => {
  return (
    <Container>
      <Dot />
      <Text>Last updated at {time}</Text>
    </Container>
  )
}

export default UpdateTime
