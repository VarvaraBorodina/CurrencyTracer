import React from 'react'

import ChartCustomDataForm from '@/components/chart/ChartCustomDataForm'
import ChartModal from '@/components/chart/ChartModal'
import ChartParamsForm from '@/components/chart/ChartParamsForm'
import ChartWithAPI from '@/components/chart/ChartWithAPI'
import ChartWithCustomInput from '@/components/chart/ChartWithCustomInput'
import TEXT from '@/constants/text'

import { Button, Container } from './styled'

class TimeLine extends React.PureComponent<object, { isCustomData: boolean }> {
  constructor(props: object) {
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
        <Button
          onClick={this.handleChangeDataInput}
          data-cy="input-type-button"
        >
          {isCustomData ? TEXT.CHART_WITH_API : TEXT.CHART_WITH_CUSTOM_DATA}
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
