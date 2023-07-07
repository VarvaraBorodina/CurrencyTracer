import React from 'react'

import Chart from '@/components/Chart'
import ChartModal from '@/components/ChartModal'
import ChartParamsForm from '@/components/ChartParamsForm'

import { Container } from './styled'

class TimeLine extends React.PureComponent<Record<string, never>> {
  render() {
    return (
      <Container>
        <ChartParamsForm />
        <Chart />
        <ChartModal />
      </Container>
    )
  }
}

export default TimeLine
