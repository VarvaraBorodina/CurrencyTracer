import React from 'react'

import ChartCustomDataForm from '@/components/ChartCustomDataForm/input'
import ChartModal from '@/components/ChartModal'
import ChartParamsForm from '@/components/ChartParamsForm'
import ChartWithAPI from '@/components/ChartWithAPI'
import ChartWithCustomInput from '@/components/ChartWithCustomInput'

import { Button, Container } from './styled'

class TimeLine extends React.PureComponent<never, { isCustomData: boolean }> {
  constructor(props: never) {
    super(props)
    this.state = {
      isCustomData: false,
    }
  }

  handleChangeDataInput = () => {
    this.setState((prevState) => {
      return {
        isCustomData: !prevState.isCustomData,
      }
    })
  }

  render() {
    const { isCustomData } = this.state
    return (
      <Container>
        <Button onClick={this.handleChangeDataInput}>
          {isCustomData ? 'Get real data' : 'Enter custom data'}
        </Button>
        {isCustomData ? (
          <>
            <ChartCustomDataForm />
            <ChartWithCustomInput />
          </>
        ) : (
          <>
            <ChartParamsForm />
            <ChartWithAPI />
          </>
        )}
        <ChartModal />
      </Container>
    )
  }
}

export default TimeLine
