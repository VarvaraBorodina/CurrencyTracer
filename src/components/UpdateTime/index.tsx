import TEXT from '@/constants/text'

import { Container, Dot, Text } from './styled'

type UpdateTimeType = {
  time: string
}
const UpdateTime = ({ time }: UpdateTimeType) => {
  return (
    <Container data-cy="update-time">
      <Dot />
      <Text>{`${TEXT.UPDATE_TIME}${time}`}</Text>
    </Container>
  )
}

export default UpdateTime
